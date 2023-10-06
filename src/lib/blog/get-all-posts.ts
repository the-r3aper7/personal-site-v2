import { readFile, readdir } from "node:fs/promises"
import path from "node:path"
import matter  from "gray-matter"
import { convertMarkdownToHtml } from "./markdown-utils/convert-markdown-html";

interface PostType {
  id: string;
  title: string;
  content: string;
  image: string;
  link: string;
  published: string;
  description: string;
}

export const getAllPosts = async () => {
  const posts = new Array<PostType>() 

  try {

    const postsPath = path.resolve('posts')
    const folders = await readdir(postsPath)
    
    for (const folder of folders) {

      const markdownData = await readFile(`${postsPath}/${folder}/index.md`, 'utf-8')
      const { data, content } = matter(markdownData)

      const converted = await convertMarkdownToHtml(content)

      posts.push({
        id: `post-${folder}`,
        title: data.title,
        content: converted,
        link: `/blog/${folder}`,
        description: data.description,
        image: data.image,
        published: "",
      })
    }
    
    return posts

  } catch(e) {
    throw Error("unable to parse posts")
  }

}