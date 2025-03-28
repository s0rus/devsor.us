import { z } from "zod";

export const ContactSchema = z.object({
  email: z.preprocess(
    (v) => (v === "" ? undefined : v),
    z
      .string({
        required_error: "email is required",
      })
      .email("email is invalid"),
  ),
  message: z.preprocess(
    (v) => (v === "" ? undefined : v),
    z
      .string({
        required_error: "message is required",
      })
      .min(1, { message: "message is too short" })
      .max(1000, { message: "message is too long" }),
  ),
});

export type ContactSchema = z.infer<typeof ContactSchema>;
