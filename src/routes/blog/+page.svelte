<script lang="ts">
    import PostCard from "$lib/components/blog-components/PostCard.svelte"
    export let data
</script>

<section class="flex justify-center min-h-screen">
    
    {#if data.posts}
        <div class="flex flex-col justify-center items-center md:flex-row flex-wrap gap-4">
            {#each data.posts as post (post.id)}
                <PostCard {...post} />
                <PostCard {...post} />
                <PostCard {...post} />
            {/each}
        </div>
    {/if}

    {#if data.error}
        {data.error}
    {/if}
    
</section>