<script lang="ts">
    import PostCard from "$lib/components/blog-components/PostCard.svelte"
    export let data
</script>

<section class="flex min-h-screen">
    
    {#if data.posts}
        <div class="flex gap-4">
            {#each data.posts as post (post.id)}
            <PostCard {...post} />
            {/each}
        </div>
    {/if}

    {#if data.error}
        {data.error}
    {/if}
    
</section>