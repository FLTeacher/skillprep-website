import { z } from "zod";

const name = z.string().trim().min(2, "Enter your name");
const email = z.string().trim().min(1, "Enter your email").email("Enter a valid email");
// Accepts "98765 43210", "+91 98765-43210", "09876543210"; stores digits only.
const phone = z
  .string()
  .trim()
  .min(1, "Enter your mobile number")
  .transform((v) => v.replace(/[\s-]/g, ""))
  .pipe(z.string().regex(/^(\+91|91|0)?[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"));

export const studentSchema = z.object({
  name,
  email,
  phone,
  college_name: z.string().trim().min(2, "Enter your college name"),
  city: z.string().trim().min(2, "Enter your city"),
});

export const collegeSchema = z.object({
  name,
  email,
  phone,
  institution: z.string().trim().min(2, "Enter your institution"),
  role: z.string().trim().min(2, "Enter your role"),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export const contactSchema = z.object({
  name,
  email,
  message: z.string().trim().min(10, "Tell us a little more (at least 10 characters)").max(2000),
});

// Field names match the Supabase columns planned for step 7.
export type FormKind = "student" | "college" | "contact";
export const SCHEMAS = { student: studentSchema, college: collegeSchema, contact: contactSchema } as const;
