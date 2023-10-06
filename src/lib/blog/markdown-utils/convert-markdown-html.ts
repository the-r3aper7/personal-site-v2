import matter  from "gray-matter"
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import parseHtmlAndMarkdown from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'

import { rehypeCopyCode, rehypeUnwrapImages } from './custom-rehype-plugins'
import type { Frontmatter } from '$lib/types'
import remarkGfm from 'remark-gfm'
import remarkAutoHeadings from 'remark-autolink-headings'
import remarkSlug from 'remark-slug'
import rehypeHighlight from "rehype-highlight"
import remarkSmartypants from 'remark-smartypants'
import remarkTableofContents from 'remark-toc'
import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'

export const convertMarkdownToHtml = async (content: string): Promise<string> => {
    
    const result = await unified()
      .use(remarkParse)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(remarkGfm)
      .use(rehypeCodeTitles)
      .use(parseHtmlAndMarkdown)
      .use(rehypeHighlight)
      .use(rehypeStringify)
      .process(content)
    
    return result.value as string
}