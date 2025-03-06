import qs from "qs";
import { API_URL } from ".";
import { Blog } from "@/types";

interface ApiResponse {
  data: Blog[];

}

export async function getBlogs(): Promise<Blog[]> {
  try {
    const query = qs.stringify(
      {
        populate: {
          cover: {
            fields: ["url"],
          },
          author: {
            fields: ["name", "matiks_user_name"],
          },
        },
        fields: ["title", "description", "createdAt", "slug"],
        pagination: {
          page: 1,
          pageSize: 100,
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
      throw new Error(`Failed to fetch blogs: ${response.status}`);
    }

    const data: ApiResponse = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(`Failed to fetch blogs: ${error}`);
  }
}
