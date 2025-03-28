"use server";

import "server-only";
import { ContactSchema } from "@/lib/contact-schema";
import { parseWithZod } from "@conform-to/zod";
import { Resend } from "resend";
import { ContactTemplate } from "@/lib/contact-template";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function contact(_prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: ContactSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const { error } = await resend.emails.send({
    from: "devsor.us <piotrmolkontakt@gmail.com>",
    to: "piotrmolkontakt@gmail.com",
    subject: "devsor.us - message submission",
    react: ContactTemplate({
      email: submission.value.email,
      message: submission.value.message,
    }),
  });

  if (error) {
    return submission.reply({
      formErrors: ["error sending email, try again later"],
    });
  }

  return submission.reply();
}
