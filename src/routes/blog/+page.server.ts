import { getAllPosts } from '$lib/blog/get-all-posts';
import type { ServerLoadEvent } from '@sveltejs/kit';

export const prerender = true;

export async function load(event: ServerLoadEvent) {
	try {
		const posts = await getAllPosts();
		return {
			posts
		};
	} catch (error) {
		return {
			error: 'some error occured'
		};
	}
}
