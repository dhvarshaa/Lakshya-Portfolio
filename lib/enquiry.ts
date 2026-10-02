import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  phone: z
    .string()
    .trim()
    .min(8, "Phone number is required")
    .max(20)
    .regex(/^[\d\s+\-()]+$/, "Enter a valid phone number"),
  class_type: z.enum(["online", "in_person", "personal"]),
  goal: z.string().trim().min(1).max(80),
  preferred_time: z.string().trim().min(1).max(40),
  message: z.string().trim().max(1000).optional().default(""),
  company: z.string().optional().default(""),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const classTypeLabels: Record<EnquiryInput["class_type"], string> = {
  online: "Online yoga",
  in_person: "In-person yoga",
  personal: "Personal training",
};
