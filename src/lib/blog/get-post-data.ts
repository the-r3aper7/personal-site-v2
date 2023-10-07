import { readFile, readdir } from 'node:fs/promises';
import { postsPath } from "$lib/config"
import { convertMarkdownToHtml } from './markdown-utils/convert-markdown-html';
import { parseMarkdownData } from './markdown-utils/get-markdown-data';

export const getPostData = async (post: string) => {
	try {
		const folder = (await readdir(postsPath)).filter((folder) => folder === post).at(0);

		const markdownData = await readFile(`${postsPath}/${folder}/index.md`, 'utf-8');

		const {frontmatter, content} = parseMarkdownData(markdownData)

		const converted = await convertMarkdownToHtml(content);

		return {
			title: frontmatter.title,
			content: converted,
			image: frontmatter.image,
			description: frontmatter.description,
			publishedOn: frontmatter.publishedOn
		};
	} catch (e) {
		throw Error('unable to parse posts');
	}
};
