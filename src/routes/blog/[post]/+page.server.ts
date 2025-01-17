import { getPostData } from '$lib/blog/get-post-data';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	const post = getPostData(params.post);
	return {
		post
	};
};
