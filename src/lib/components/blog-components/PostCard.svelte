<script lang="ts">
	import Image from '../shared/Image.svelte';
	export let image: string = '';
	export let title: string;
	export let publishedOn: string;
	export let description: string;
	export let link: string;
</script>

<div class="post-card p-4 group space-y-4" data-sveltekit-preload-code="hover">
	{#if image !== ''}
		<a href={link}>
			<Image
				src={image}
				alt={`${title}-image`}
				className="object-cover max-h-40 w-full grayscale smooth-transition group-hover:grayscale-0 rounded"
			/>
		</a>
	{:else}
		<div class="h-40 w-full" />
	{/if}
	<a href={link} class="space-y-4 pt-4 block">
		<h3 class="font-medium text-xl line-clamp-1">
			{title}
		</h3>
		<p class="text-base line-clamp-3 h-[76px]">{description}</p>
		<p class="text-center">{publishedOn}</p>
	</a>
</div>

<style lang="postcss">
	.post-card {
		@apply h-96 w-80 bg-neutral-800 border border-gray-600 rounded;
	}
</style>
