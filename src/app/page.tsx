"use client";

import { PROJECTS, Projects } from "@/components/projects";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="flex h-full min-h-screen w-full max-w-md flex-col px-4 py-8 md:px-8">
      <motion.nav
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "keyframes",
          ease: "easeInOut",
          delay: 0,
        }}
      >
        <ul className="flex flex-row items-baseline gap-x-2">
          <li>
            <a
              href="https://github.com/s0rus"
              className="text-foreground/95 hover:text-foreground scroll-m-20 font-bold tracking-tight underline underline-offset-1 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
          </li>
          <span className="text-muted font-mono text-sm font-bold">|</span>
          <li>
            <a
              href="https://www.linkedin.com/in/piotrmol/"
              className="text-foreground/95 hover:text-foreground scroll-m-20 font-bold tracking-tight underline underline-offset-1 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              linkedin
            </a>
          </li>
        </ul>
      </motion.nav>
      <main>
        <motion.div
          className="flex flex-row items-baseline gap-x-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "keyframes",
            ease: "easeInOut",
            delay: 0.12 * 1,
          }}
        >
          <h1 className="mt-1 text-left text-6xl leading-none font-semibold tracking-tight">
            piotr mól
          </h1>
          <svg
            width="420"
            height="280"
            viewBox="0 0 420 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-auto w-12"
          >
            <path
              d="M0 140L70.0165 70L0 0H140.033V140L0 280V140Z"
              fill="currentColor"
            />
            <path d="M279.812 0V139.779L140 0L279.812 0Z" fill="currentColor" />
            <path d="M419.812 0V139.779L280 0L419.812 0Z" fill="currentColor" />
          </svg>
        </motion.div>
        <motion.p
          className="mt-4 text-justify font-mono text-base leading-none tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "keyframes",
            ease: "easeInOut",
            delay: 0.12 * 2,
          }}
        >
          sometimes i somehow create something somewhat useful. i use nvim btw.
        </motion.p>
        <section className="mt-4 flex w-full flex-col gap-y-2">
          <motion.h2
            className="text-muted scroll-m-20 font-semibold tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "keyframes",
              ease: "easeInOut",
              delay: 0.12 * 3,
            }}
          >
            projects:
          </motion.h2>
          <Projects />
        </section>
      </main>
      <motion.footer
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "keyframes",
          ease: "easeInOut",
          delay: 0.12 * (5 + PROJECTS.length),
        }}
        className="text-muted mt-auto flex w-full flex-col gap-y-2 text-xs"
      >
        <span>pm &copy; {new Date().getFullYear()} cwlstn.</span>
      </motion.footer>
    </div>
  );
}
