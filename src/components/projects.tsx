import { motion } from "motion/react";

type Project = {
  name: string;
  description: string;
  url: string;
};

export const PROJECTS: Project[] = [
  {
    name: "baselinker-js",
    description: "type-safe client for baselinker",
    url: "https://www.npmjs.com/package/baselinker-js",
  },
  {
    name: "pan książeczka",
    description:
      "fullstack e-commerce book shop with baselinker and paynow integration",
    url: "https://panksiazeczka.pl",
  },
  {
    name: "inpost-geowidget-next",
    description: "simple copy-paste inpost geowidget component for next.js",
    url: "https://github.com/s0rus/inpost-geowidget-next",
  },
  {
    name: "agrogust",
    description: "landing page for agrogust.pl",
    url: "https://agrogust.pl",
  },
];

export function Projects() {
  return (
    <ul className="flex flex-col gap-y-1">
      {PROJECTS.map((project, idx) => (
        <motion.li
          key={project.name}
          className="flex flex-row items-start gap-x-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "keyframes",
            ease: "easeInOut",
            delay: 0.12 * (4 + idx),
          }}
        >
          <span className="text-muted font-mono text-xs">{idx}.</span>
          <Project project={project} />
        </motion.li>
      ))}
    </ul>
  );
}

function Project({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      className="hover:bg-muted/10 flex w-full flex-col px-2 py-1 transition-colors hover:rounded-sm"
      target="_blank"
      rel="noreferrer"
    >
      <h3 className="scroll-m-20 font-mono text-sm leading-tight font-bold tracking-tight">
        {project.name}
      </h3>
      <p className="text-muted scroll-m-20 font-mono text-xs leading-tight tracking-tighter">
        {project.description}
      </p>
    </a>
  );
}
