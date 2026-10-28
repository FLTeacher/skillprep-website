import { NextResponse } from "next/server";
import { SCHEMAS, type FormKind } from "@/lib/schemas";
import { supabaseAdmin } from "@/lib/supabase-server";
import { sendConfirmationEmail } from "@/lib/notify";

export const runtime = "nodejs";

const TABLES: Record<FormKind, string> = {
  student: "student_interest",
  college: "college_inquiry",
  contact: "contact_message",
};

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field. Pretend success so bots learn nothing.
  if (typeof body.hp === "string" && body.hp.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const kind = body.kind as FormKind;
  if (!(kind in SCHEMAS)) return NextResponse.json({ error: "Invalid request" }, { status: 400 });

  const parsed = SCHEMAS[kind].safeParse(body.data);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }
  const row = { ...parsed.data } as Record<string, unknown>;
  if (row.message === "") row.message = null;

  try {
    const { error } = await supabaseAdmin().from(TABLES[kind]).insert(row);
    if (error) {
      // 23505 = unique violation: this email already signed up. Treat as success.
      if (error.code === "23505") return NextResponse.json({ ok: true, duplicate: true });
      console.error(`[lead:${kind}] insert failed`, error.code, error.message);
      return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
    }
  } catch (e) {
    console.error(`[lead:${kind}] unexpected`, e);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }

  await sendConfirmationEmail({ kind, to: String(row.email), name: String(row.name) }).catch(() => {});
  return NextResponse.json({ ok: true });
}
