import { getPostData } from "$lib/blog-utils/get-post-data";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({params}) => {
  const post = getPostData(params.post)
  return {
    post
  }
}