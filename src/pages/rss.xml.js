import { ROUTES, SITE_DESCRIPTION, SITE_TITLE } from "../lib/consts";

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blog");

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: blog.map((post) => ({
      ...post.data,
      link: `${ROUTES.blog}/${post.slug}`,
      pubDate: post.data.publicationDate,
    })),
    customData: `<language>en-us</language>`,
  });
}
