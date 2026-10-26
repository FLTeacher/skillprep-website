"use client";

import { useState } from "react";
import { CheckCircle } from "@phosphor-icons/react";
import { toast } from "sonner";
import { SCHEMAS, type FormKind } from "@/lib/schemas";

type Field = { name: string; label: string; type?: string; autoComplete?: string; textarea?: boolean; optional?: boolean };

const CONFIG: Record<FormKind, { fields: Field[]; submit: string; success: string }> = {
  student: {
    fields: [
      { name: "name", label: "Full name", autoComplete: "name" },
      { name: "email", label: "Email", type: "email", autoComplete: "email" },
      { name: "phone", label: "Mobile number", type: "tel", autoComplete: "tel" },
      { name: "college_name", label: "College name", autoComplete: "organization" },
      { name: "city", label: "City", autoComplete: "address-level2" },
    ],
    submit: "Get Early Access",
    success: "You're on the list. We'll be in touch with early access details.",
  },
  college: {
    fields: [
      { name: "name", label: "Your name", autoComplete: "name" },
      { name: "email", label: "Work email", type: "email", autoComplete: "email" },
      { name: "phone", label: "Mobile number", type: "tel", autoComplete: "tel" },
      { name: "institution", label: "Institution", autoComplete: "organization" },
      { name: "role", label: "Your role (e.g. TPO, Director)", autoComplete: "organization-title" },
      { name: "message", label: "Anything you'd like us to know", textarea: true, optional: true },
    ],
    submit: "Request a demo",
    success: "Thanks. We'll reach out to set up your demo.",
  },
  contact: {
    fields: [
      { name: "name", label: "Your name", autoComplete: "name" },
      { name: "email", label: "Email", type: "email", autoComplete: "email" },
      { name: "message", label: "How can we help?", textarea: true },
    ],
    submit: "Send message",
    success: "Thanks. We'll get back to you soon.",
  },
};

export default function LeadForm({ kind }: { kind: FormKind }) {
  const { fields, submit, success } = CONFIG[kind];
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = SCHEMAS[kind].safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] ??= issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setSending(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, data: parsed.data, company: data.company ?? "" }),
      });
      if (!res.ok) throw new Error(String(res.status));
      toast.success(success);
      setDone(true);
    } catch {
      toast.error("We couldn't send that. Please try again in a moment.");
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <div role="status" className="flex items-start gap-3 rounded-xl border border-cyan-brand/30 bg-cyan-brand/10 p-5">
        <CheckCircle size={26} weight="duotone" className="shrink-0 text-cyan-brand" />
        <p>{success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {fields.map((f) => {
        const id = `${kind}-${f.name}`;
        const err = errors[f.name];
        const common = {
          id,
          name: f.name,
          autoComplete: f.autoComplete,
          "aria-invalid": err ? true : undefined,
          "aria-describedby": err ? `${id}-err` : undefined,
          className: "field",
        } as const;
        return (
          <div key={f.name}>
            <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
              {f.label}
              {f.optional && <span className="text-purple-muted"> (optional)</span>}
            </label>
            {f.textarea ? <textarea rows={4} {...common} /> : <input type={f.type ?? "text"} {...common} />}
            {err && <p id={`${id}-err`} className="mt-1 text-xs text-coral-brand">{err}</p>}
          </div>
        );
      })}
      <button type="submit" disabled={sending} className="btn-primary w-full disabled:opacity-60 sm:w-auto">
        {sending ? "Sending..." : submit}
      </button>
    </form>
  );
}
