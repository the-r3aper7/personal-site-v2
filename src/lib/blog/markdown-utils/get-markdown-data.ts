import type { Frontmatter } from "$lib/types";
import matter from "gray-matter";

export const parseMarkdownData = (markdownFileData: string) => {
  const { data, content } = matter(markdownFileData);

  return {
    frontmatter: data as Frontmatter, 
    content
  }
}