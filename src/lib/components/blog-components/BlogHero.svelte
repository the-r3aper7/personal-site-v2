<script lang="ts">
	import Image from "../shared/Image.svelte";

  export let image: string = '';
	export let title: string;
	export let published: string;
</script>

<section class="space-y-8">
	<h1 class="text-7xl text-center font-semibold uppercase">{title}</h1>
	<p class="text-center text-lg text-gray-300 font-semibold"><span class="uppercase">written by Sai Srikar Dumpeti</span> | <span>{published}</span></p>
	<Image src={image} alt="post-hero-image" />
</section>