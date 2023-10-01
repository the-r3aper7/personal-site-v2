import type { Load, ServerLoadEvent } from '@sveltejs/kit';

export const prerender = true;

// export function load() {
//   return {
//     answer: 42
//   };
// }

export async function load(event: ServerLoadEvent) {
	const request = await fetch('https://api.github.com/users/the-r3aper7/repos');

	if (!request.ok) {
		return {
			success: false,
			data: []
		};
	}

	const response = await request.json();

	const data = new Array();

	for (let repo of response) {
		if (!repo.fork) {
			data.push({
				id: repo.id,
				name: repo.name,
				full_name: repo.full_name,
				stars: repo.stargazers_count,
				owner: repo.owner.login,
				link: repo.html_url
			});
		}
	}

	return {
		success: true,
		data: data
	};
}
