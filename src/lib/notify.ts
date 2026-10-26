import type { FormKind } from "@/lib/schemas";

type Confirmation = { kind: FormKind; to: string; name: string };

// TODO: send confirmation emails with Resend once the account and domain are set up.
export async function sendConfirmationEmail(args: Confirmation): Promise<void> {
  void args;
}
