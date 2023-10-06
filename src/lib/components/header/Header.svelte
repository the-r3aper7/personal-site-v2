<script lang="ts">
	import { IconMenu2, IconX } from '@tabler/icons-svelte';
	import logo from '$lib/assets/website-logo.png';
	import Image from '../shared/Image.svelte';

	let isMobileHeaderOpen = true;

	let navItems = [
		{
			id: 'nav-items-1',
			title: 'Home',
			link: '/'
		},
		{
			id: 'nav-items-2',
			title: 'Blog',
			link: '/blog'
		}
	];

	function mobileHeaderToggle() {
		isMobileHeaderOpen = !isMobileHeaderOpen;
	}
</script>

<header class="glass sticky z-20 top-0 text-opacity-80 w-full">
	<div class="margin-content">
		<div class="padded-content flex items-center justify-between relative h-20">
			<a href="/" class="flex items-center gap-x-2">
				<Image alt="SSD" src={logo} width="42px" className="rounded-md" />
				<p
					class="hidden md:block text-3xl font-bold bg-clip-text text-transparent text-gradient-color"
				>
					Sai Srikar Dumpeti
				</p>
			</a>
			<div class="hidden md:flex md:gap-x-8">
				{#each navItems as navItem (navItem.id)}
					<a href={navItem.link}>{navItem.title}</a>
				{/each}
			</div>
			<!-- Hamburger Button -->
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
		<!-- Mobile Header-->
		<div
			class={`${
				isMobileHeaderOpen ? 'hidden' : ''
			} glass md:hidden block absolute min-h-fit rounded-b-lg py-6`}
		>
			<ul class="flex flex-col items-center gap-y-2 w-screen">
				{#each navItems as navItem (navItem.id)}
					<li>
						<a href={navItem.link}>{navItem.title}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</header>
