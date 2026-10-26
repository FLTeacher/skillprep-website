import { z } from "zod";

const name = z.string().trim().min(2, "Please enter your name");
const email = z.string().trim().email("Enter a valid email");
const phone = z
  .string()
  .trim()
  .regex(/^(\+91[\s-]?)?[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number");

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
  message: z.string().trim().min(10, "Tell us a little more").max(2000),
});

// Field names match the Supabase columns planned for step 7.
export type FormKind = "student" | "college" | "contact";
export const SCHEMAS = { student: studentSchema, college: collegeSchema, contact: contactSchema } as const;
