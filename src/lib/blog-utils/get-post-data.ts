import { readFile, readdir } from "node:fs/promises"
import path from "node:path"
import matter from "gray-matter"
import { convertMarkdownToHtml } from "./markdown/convert-markdown-html";

interface PostType {
  id: string;
  title: string;
  content: string;
  image: string;
  link: string;
  published: string;
  description: string;
}

export const getPostData = async (post: string) => {
  try {

    const postsPath = path.resolve('posts')
    const folder = (await readdir(postsPath)).filter((folder) => folder === post).at(0)


    const markdownData = await readFile(`${postsPath}/${folder}/index.md`, 'utf-8')
    const { data, content } = matter(markdownData)

    const converted = await convertMarkdownToHtml(content)

    return {
      title: data.title,
      content: converted,
      image: data.image,
      published: data.publishedOn,
    }

  } catch (e) {
    throw Error("unable to parse posts")
  }

}