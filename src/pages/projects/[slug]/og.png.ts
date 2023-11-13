import { ImageResponse } from "@vercel/og";
import { getCollection, type CollectionEntry } from "astro:content";
import type { JSXElementConstructor, ReactElement } from "react";
import { capitalizeWord } from "../../../lib/utils";

interface Props {
  params: { slug: string };
  props: { project: CollectionEntry<"projects"> };
  request: Request;
}

export async function GET({ props, request }: Props) {
  const { project } = props;
  const BASE_URL = new URL(request.url).origin;

  const html: ReactElement<any, string | JSXElementConstructor<any>> = {
    key: project.id,
    type: "div",
    props: {
      tw: "w-full h-full flex items-center justify-start relative px-24",
      style: {
        background: "#000000",
        fontFamily: "GeistMono",
        backgroundImage: `url(${BASE_URL}/og-base.png)`,
      },
      children: [
        {
          type: "div",
          props: {
            tw: "shrink flex text-white text-6xl tracking-tight",
            children: [
              {
                type: "div",
                props: {
                  children: `Project // ${capitalizeWord(project.data.title)}`,
                },
              },
            ],
          },
        },
      ],
    },
  };

  return new ImageResponse(html, {
    width: 1200,
    height: 600,
    fonts: [
      {
        name: "GeistMono",
        data: await fetch(
          new URL(`${BASE_URL}/fonts/GeistMono-Regular.ttf`).href,
        ).then((res) => res.arrayBuffer()),
        style: "normal",
      },
    ],
    headers: { "Content-Type": "image/png" },
  });
}

export async function getStaticPaths() {
  const projects = await getCollection("projects");
  return projects.map((project) => ({
    params: { slug: project.slug },
    props: { project },
  }));
}
