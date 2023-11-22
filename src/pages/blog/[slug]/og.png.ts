import { ImageResponse } from "@vercel/og";
import { getCollection, type CollectionEntry } from "astro:content";
import fs from "fs";
import path from "path";
import type { JSXElementConstructor, ReactElement } from "react";

interface Props {
  params: { slug: string };
  props: { post: CollectionEntry<"blog"> };
  request: Request;
}

export async function GET({ props, request }: Props) {
  const { post } = props;
  const BASE_URL = new URL(request.url).origin;

  const GeistMono = fs.readFileSync(
    path.resolve("./public/fonts/GeistMono-Regular.ttf"),
  ).buffer;

  const html: ReactElement<any, string | JSXElementConstructor<any>> = {
    key: post.id,
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
                  children: `${post.data.title}`,
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
        data: GeistMono,
        style: "normal",
      },
    ],
    headers: { "Content-Type": "image/png" },
  });
}

export async function getStaticPaths() {
  const blog = await getCollection("blog");
  return blog.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}
