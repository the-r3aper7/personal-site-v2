<script lang="ts">
	import { IconArrowUpRight } from '@tabler/icons-svelte';
	import Image from '$lib/components/shared/Image.svelte';
</script>

<section class="min-h-screen">
	<div class="flex flex-col items-center py-64 gap-y-10">
		<Image
			src={'https://github.com/the-r3aper7.png'}
			width="196px"
			className="rounded-full"
			alt="Sai Srikar Dumpeti"
		/>
		<div class="space-y-8">
			<h1 class="text-2xl text-center">Hi, I'm Sai Srikar Dumpeti 👋🏻</h1>

			<div
				class="text-4xl font-medium gap-y-2 bg-clip-text text-gradient-color text-transparent w-fit pb-6"
			>
				<p class="text-center">Exploring OSS</p>
				<p class="text-center">Love Playing Games</p>
				<p class="text-center">and Programming <span class="text-white">👨🏻‍💻</span></p>
			</div>
		</div>
		<a
			type="button"
			href="https://github.com/the-r3aper7"
			class="btn glass flex gap-x-2 mt-8 smooth-transition"
			>Checkout my projects <span><IconArrowUpRight size={22} /></span></a
		>
	</div>
</section>
