<script lang="ts">
	import { IconMenu2, IconX } from '@tabler/icons-svelte';
	let isMobileHeaderOpen = true;

	function mobileHeaderToggle() {
		isMobileHeaderOpen = !isMobileHeaderOpen;
	}
</script>

<header class="glass sticky z-20 top-0 text-white text-opacity-80 w-full">
	<div class="max-w-7xl mx-auto">
		<div class="padded-content flex items-center justify-between relative h-20">
			<a href="/" class="flex items-center gap-x-2">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
					alt="svelte logo"
					width="32"
				/>
				<p class="hidden md:block text-3xl font-bold">Sai Srikar Dumpeti</p>
			</a>
			<div class="hidden md:flex md:gap-x-16">
				<a href="/">Home</a>
				<a href="/">Blog</a>
				<a href="/">About Me</a>
			</div>
			<div class="md:hidden">
				<button on:click={mobileHeaderToggle}>
					{#if isMobileHeaderOpen}
						<IconMenu2 size={26} />
					{:else}
						<IconX size={26} />
					{/if}
				</button>
			</div>
		</div>
		<hr class="h-px border border-gray-700" />
		<div
			class={`${
				isMobileHeaderOpen ? 'hidden' : ''
			} glass md:hidden block absolute min-h-fit rounded-b-lg py-6`}
		>
			<ul class="flex flex-col items-center gap-y-2">
				<li><a href="/home">Home</a></li>
				<li><a href="/blog">Blog</a></li>
				<li><a href="/about-me">AboutMe</a></li>
			</ul>
		</div>
	</div>
</header>
