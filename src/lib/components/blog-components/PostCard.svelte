<script lang="ts">
	import Image from '../shared/Image.svelte';
	export let image: string = '';
	export let title: string;
	export let publishedOn: string;
	export let description: string;
	export let link: string;
</script>

<div class="skill-card p-4 group space-y-4" data-sveltekit-preload-code="hover">
	<a href={link}>
		{#if image !== ''}
			<Image
				src={image}
				alt={`${title}-image`}
				className="object-cover max-h-40 w-full grayscale smooth-transition group-hover:grayscale-0 rounded-xl"
			/>
		{:else}
			<div class="h-40 w-full" />
		{/if}
		<h3 class="font-medium text-xl pt-4 line-clamp-1">
			{title}
		</h3>
		<p class="text-base line-clamp-3 h-[76px]">{description}</p>
		<p class="text-center">{publishedOn}</p>
	</a>
</div>

<style lang="postcss">
	.skill-card {
		@apply h-96 w-80 bg-neutral-800 border border-gray-600 rounded-xl;
	}
</style>
