import { getAllPosts } from "$lib/blog/get-all-posts";
import type { ServerLoadEvent } from "@sveltejs/kit";
import { log } from "console";

export async function load(event: ServerLoadEvent) {
  try {
    const posts = await getAllPosts()
    return {
      posts
    } 
  } catch (error) {
    log(error)
    return {
      error: "some error occured"
    }
  }
}