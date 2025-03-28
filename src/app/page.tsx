import { Contact } from "@/components/contact";
import { Projects } from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-full min-h-screen w-full max-w-md flex-col px-4 py-8 md:px-8">
      <nav>
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
      </nav>
      <main>
        <div className="flex flex-row items-baseline justify-between gap-x-2">
          <h1 className="mt-1 flex-1 text-left text-6xl leading-none font-semibold tracking-tight">
            piotr mól
          </h1>
          <Image
            src="/assets/pm.gif"
            alt="piotr mól"
            width={100}
            height={100}
            unoptimized
          />
        </div>
        <p className="mt-4 text-justify font-mono text-base leading-none tracking-tight">
          sometimes i create something somewhat useful. i use nvim btw.
        </p>
        <section className="mt-4 flex w-full flex-col gap-y-2">
          <h2 className="text-muted scroll-m-20 font-semibold tracking-tight">
            projects:
          </h2>
          <Projects />
        </section>
        <Contact />
      </main>
      <footer className="text-muted mt-auto flex w-full flex-col gap-y-2 text-xs">
        <span>pm @ {new Date().getFullYear()} cwlstn.</span>
      </footer>
    </div>
  );
}
