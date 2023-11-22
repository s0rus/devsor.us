import { ImageResponse } from "@vercel/og";
import fs from "fs";
import path from "path";
import type { JSXElementConstructor, ReactElement } from "react";

export const prerender = false;

export async function GET({ request }: { request: Request }) {
  const { origin, searchParams } = new URL(request.url);
  const title = searchParams.get("title");

  if (!title) {
    return new Response("Title parameter is required", { status: 400 });
  }

  const GeistMono = fs.readFileSync(
    path.resolve("./fonts/GeistMono-Regular.ttf"),
  ).buffer;

  const html: ReactElement<any, string | JSXElementConstructor<any>> = {
    key: title,
    type: "div",
    props: {
      tw: "w-full h-full flex items-center justify-start relative px-24",
      style: {
        background: "#000000",
        fontFamily: "GeistMono",
        backgroundImage: `url("${origin}/og-base.png")`,
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
                  children: title,
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
