<script lang="ts">
	import PostCard from '$lib/components/blog-components/PostCard.svelte';
	export let data;
</script>

<section class="margin-content flex flex-col min-h-screen gap-y-12 my-16">
	<div class="flex flex-wrap justify-center gap-4">
		{#if data.posts}
			<div class="flex flex-col justify-center items-center md:flex-row flex-wrap gap-4">
				{#each data.posts as post (post.id)}
					<PostCard {...post} />
				{/each}
			</div>
		{/if}

		{#if data.error}
			{data.error}
		{/if}
	</div>
</section>
