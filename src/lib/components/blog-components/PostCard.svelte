<script lang="ts">
	import Image from "../shared/Image.svelte";

	export let image: string = '';
	export let title: string;
	export let published: string;
	export let description: string;
	export let link: string;
</script>

<div class="skill-card p-4 group space-y-4">
	{#if image !== ''}
		<Image src={image} alt={`${title}-image`} className="object-cover max-h-40 w-full grayscale smooth-transition group-hover:grayscale-0 rounded-xl" />
	{:else}
		<div class="h-40 w-full"></div>
	{/if}
	<h3 class="font-medium text-xl pt-4 line-clamp-1">
		<a href={link}>
			{title}
		</a>
	</h3>
	<p class="text-base line-clamp-3 h-[76px]">{description}</p>
	<p class="text-center">{published}</p>
</div>

<style lang="postcss">
	.skill-card {
		@apply h-96 w-80 bg-neutral-800 border border-gray-600 rounded-xl;
	}
</style>
