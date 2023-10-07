import { readFile, readdir } from 'node:fs/promises';
import matter from 'gray-matter';
import {postsPath} from "$lib/config"
import { convertMarkdownToHtml } from './markdown-utils/convert-markdown-html';
import { parseMarkdownData } from './markdown-utils/get-markdown-data';

type PostType = {
	id: string;
	title: string;
	content: string;
	image: string;
	link: string;
	publishedOn: string;
	description: string;
}

export const getAllPosts = async () => {
	const posts = new Array<PostType>();

	try {
		const folders = await readdir(postsPath);

		for (const folder of folders) {
			const markdownData = await readFile(`${postsPath}/${folder}/index.md`, 'utf-8');
			
			const {frontmatter, content}  = parseMarkdownData(markdownData)

			const converted = await convertMarkdownToHtml(content);

			posts.push({
				id: `post-${folder}`,
				title: frontmatter.title,
				content: converted,
				link: `/blog/${folder}`,
				description: frontmatter.description,
				image: frontmatter.image,
				publishedOn: frontmatter.publishedOn
			});
		}

		return posts;
	} catch (e) {
		throw Error('unable to parse posts');
	}
};
