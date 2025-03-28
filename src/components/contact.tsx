"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { contact } from "@/app/actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { ContactSchema } from "@/lib/contact-schema";
import { Check, Loader2 } from "lucide-react";

export function Contact() {
  const [open, setOpen] = React.useState(false);
  const [lastResult, action, pending] = React.useActionState(
    contact,
    undefined,
  );
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: ContactSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  React.useEffect(() => {
    if (form?.status === "success") {
      setTimeout(() => {
        setOpen(false);
      }, 3300);
    }
  });

  React.useEffect(() => {
    const controller = new AbortController();

    window.addEventListener(
      "keydown",
      (event) => {
        if (event.key === "Escape") {
          setOpen(false);
        }
      },
      {
        signal: controller.signal,
      },
    );

    return () => {
      controller.abort();
    };
  });

  return (
    <section className="flex h-fit w-full max-w-[240px]">
      <motion.button
        layoutId="wrapper"
        onClick={() => {
          setOpen(true);
        }}
        className="mt-4"
      >
        <motion.span
          layoutId="title"
          className="block cursor-pointer font-mono text-sm underline underline-offset-2"
        >
          contact me
        </motion.span>
      </motion.button>
      <AnimatePresence>
        {open ? (
          <motion.div
            layoutId="wrapper"
            className="border-muted bg-background absolute mt-4 flex h-fit w-full max-w-[240px] flex-col justify-between overflow-hidden border sm:max-w-sm"
          >
            <motion.span
              layoutId="title"
              className="absolute top-[6px] left-[12px] z-10 font-mono text-sm"
            >
              contact me
            </motion.span>
            <AnimatePresence mode="popLayout" initial={false}>
              {form.status === "success" ? (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -32,
                    filter: "blur(4px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -32,
                    filter: "blur(4px)",
                  }}
                  transition={{
                    type: "spring",
                    duration: 0.4,
                    bounce: 0,
                  }}
                  className="flex h-[160px] w-full flex-col items-center justify-center gap-y-1 text-center"
                >
                  <Check className="h-3 w-3 text-green-500" />
                  <h4 className="text-sm font-semibold">email sent!</h4>
                  <p className="text-muted text-xs">
                    thank you for your message.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  exit={{
                    opacity: 0,
                    y: 8,
                    filter: "blur(4px)",
                  }}
                  transition={{
                    type: "spring",
                    duration: 0.4,
                    bounce: 0,
                  }}
                  className="flex h-full flex-col pt-8"
                  key="form"
                  id={form.id}
                  onSubmit={form.onSubmit}
                  action={action}
                  noValidate
                >
                  {form.errors && (
                    <div>
                      {form.errors.map((error, idx) => (
                        <div
                          key={idx}
                          className="w-full px-3 py-1 text-xs text-red-500"
                        >
                          {error}
                        </div>
                      ))}
                    </div>
                  )}
                  <input
                    className="placeholder:text-muted border-muted z-10 flex h-9 w-full border-t border-b bg-transparent px-3 py-2 text-base shadow-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    placeholder="your email"
                    type="email"
                    key={fields.email.key}
                    name={fields.email.name}
                    aria-describedby={fields.email.errorId}
                    aria-invalid={fields.email.errors ? true : undefined}
                  />
                  {fields.email.errors && (
                    <div
                      id={fields.email.errorId}
                      className="border-muted w-full border-b px-3 py-1 text-xs text-red-500"
                    >
                      {fields.email.errors}
                    </div>
                  )}
                  <textarea
                    className="border-muted placeholder:text-muted flex h-full min-h-[60px] resize-none border-b bg-transparent px-3 py-2 text-base shadow-sm disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    placeholder="your message"
                    key={fields.message.key}
                    name={fields.message.name}
                    aria-describedby={fields.message.errorId}
                    aria-invalid={fields.message.errors ? true : undefined}
                  ></textarea>
                  {fields.message.errors && (
                    <div
                      id={fields.message.errorId}
                      className="border-muted w-full border-b px-3 py-1 text-xs text-red-500"
                    >
                      {fields.message.errors}
                    </div>
                  )}
                  <div className="flex w-full flex-row items-center justify-end">
                    <button
                      className="hover:bg-background/90 border-muted inline-flex h-8 w-32 cursor-pointer items-center justify-center gap-2 border-l bg-transparent py-1 font-mono font-semibold whitespace-nowrap shadow-sm transition-colors disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                      type="submit"
                    >
                      <AnimatePresence mode="popLayout" initial={false}>
                        <motion.span
                          initial={{ opacity: 0, y: -25 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 25 }}
                          transition={{
                            type: "spring",
                            duration: 0.3,
                            bounce: 0,
                          }}
                          key={`form-submit-${pending}`}
                        >
                          {pending ? (
                            <Loader2 className="h-3 w-3 animate-spin" />
                          ) : (
                            <span>send</span>
                          )}
                        </motion.span>
                      </AnimatePresence>
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
