import { ROUTES, SITE_DESCRIPTION, SITE_TITLE } from "../lib/consts";

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const projects = await getCollection("projects");

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: projects.map((project) => ({
      ...project.data,
      link: `${ROUTES.projects}/${project.slug}`,
      pubDate: new Date().toUTCString(),
    })),
    customData: `<language>en-us</language>`,
  });
}
