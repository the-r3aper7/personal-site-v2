<script lang="ts">
	import '$lib/styles/blog/code-block.css';
	import '$lib/styles/blog/blog.css';
	import BlogHero from '$lib/components/blog-components/BlogHero.svelte';
	import { onMount } from 'svelte';
	export let data;

	onMount(() => {
		const codeBlocks = document.querySelectorAll('pre');

		codeBlocks.forEach((codeBlock) => {
			const copyButton = document.createElement('span');

			let clipBoardTimeout: string | number | NodeJS.Timeout | undefined;

			copyButton.innerText = 'Copy';
			copyButton.classList.add('copy-button');

			copyButton.addEventListener('click', (ev) => {
				// @ts-ignore
				const toCopyText = ev.target.offsetParent.firstChild.innerText;

				navigator.clipboard
					.writeText(toCopyText)
					.then(() => {
						copyButton.classList.add('copy-button-success');
						copyButton.innerHTML = 'Copied!';
						clipBoardTimeout = setTimeout(() => {
							copyButton.classList.remove('copy-button-success');
							copyButton.innerText = 'Copy';
						}, 2000);
					})
					.catch(() => {
						copyButton.classList.add('copy-button-error');
						copyButton.innerHTML = 'Error!';
						clipBoardTimeout = setTimeout(() => {
							copyButton.classList.remove('copy-button-error');
							copyButton.innerText = 'Copy';
						}, 2000);
					});
			});

			codeBlock.classList.add('relative');

			codeBlock.appendChild(copyButton);

			return () => clearTimeout(clipBoardTimeout);
		});
	});
</script>

<section class="blog">
	<BlogHero image={data.post.image} title={data.post.title} publishedOn={data.post.publishedOn} />

	{@html data.post.content}
</section>
