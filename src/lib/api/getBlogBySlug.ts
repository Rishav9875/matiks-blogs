// write getBlogByslug for strapi

import qs from "qs";
import { API_URL } from ".";
import { BlogDetails } from "@/types";

export async function getBlogBySlug(slug: string): Promise<BlogDetails> {
  try {
    const query = qs.stringify(
      {
        populate: {
          sections: {
            fields: ["title", "content", "shouldShowDownloadButton"],
            populate: {
              image: {
                fields: ["url"],
              },
            },
          },
          articles: {
            fields: ["title", "description", "createdAt"],
            populate: {
              cover: {
                fields: ["url"],
              },
              author: {
                fields: ["name"],
              },
            },
          },
          cover: {
            fields: ["url"],
          },
          author: {
            fields: ["name", "matiks_user_name"],
          },
        },
        fields: ["title", "description", "createdAt"],
        where: {
          slug,
        },
      },
      {
        encodeValuesOnly: true,
      }
    );
    const strapiUrl = API_URL;
    const response = await fetch(`${strapiUrl}/api/articles?${query}`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 600 },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data?.data?.[0] ?? {};
  } catch (error) {
    throw error;
  }
}
