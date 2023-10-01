<script lang="ts">
	import { IconArrowUpRight, IconExternalLink } from '@tabler/icons-svelte';
	import pythonlogo from '$lib/assets/logos/python.png';
	import htmllogo from '$lib/assets/logos/html.png';
	import csslogo from '$lib/assets/logos/css.png';
	import javascriptlogo from '$lib/assets/logos/javascript.png';
	import gologo from '$lib/assets/logos/go.png';
	import rustlogo from '$lib/assets/logos/rust.png';
	import reactlogo from '$lib/assets/logos/react.png';
	import qwiklogo from '$lib/assets/logos/qwik.png';
	import sveltelogo from '$lib/assets/logos/svelte.png';

	// export let data;

	let skills = [
		{
			id: 'my-skills-1',
			name: 'Python',
			lang: 'python',
			imgLocation: pythonlogo,
			description: 'Experience in creating REST APIs and mine data using requests.'
		},
		{
			id: 'my-skills-2',
			name: 'HTML5',
			lang: 'html',
			imgLocation: htmllogo,
			description: 'Experience in creating basic site structures.'
		},
		{
			id: 'my-skills-3',
			name: 'CSS3',
			lang: 'css',
			imgLocation: csslogo,
			description: 'Experience in making websites beautiful.'
		},
		{
			id: 'my-skills-4',
			name: 'JavaScript',
			lang: 'javascript',
			imgLocation: javascriptlogo,
			description:
				'Experience in giving functionality to website, used usually in React.js and other frameworks.'
		},
		{
			id: 'my-skills-5',
			name: 'Golang',
			lang: 'go',
			imgLocation: gologo,
			description: 'Basic understanding of language like concurrency and created a project.'
		},
		{
			id: 'my-skills-6',
			name: 'Svelte',
			lang: 'svelte',
			imgLocation: sveltelogo,
			description: 'Learning to create Frontend UIs with this amazing framework.'
		},
		{
			id: 'my-skills-7',
			name: 'React.js',
			lang: 'typescript',
			imgLocation: reactlogo,
			description: 'Created some websites using this framework.'
		},
		{
			id: 'my-skills-8',
			name: 'Qwik',
			lang: 'typescript',
			imgLocation: qwiklogo,
			description: 'Created some personal side projects which never get completed 😅'
		},
		{
			id: 'my-skills-9',
			name: 'Rust',
			lang: 'rust',
			imgLocation: rustlogo,
			description: 'Currently learning this language.'
		}
	];
</script>

<section class="min-h-screen text-white">
	<div class="flex flex-col items-center py-64 gap-y-10">
		<img
			src="https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg"
			alt=""
			width="172px"
			class="rounded-full"
		/>
		<div class="space-y-8">
			<h1 class="text-2xl text-center">Hi, I'm Sai Srikar Dumpeti 👋🏻</h1>

			<div
				class="text-4xl font-medium gap-y-2 bg-clip-text text-gradient-color text-transparent w-fit"
			>
				<p class="text-center">Exploring World</p>
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

<section class="flex flex-col min-h-screen text-white gap-y-12">
	<h1 class="text-5xl font-semibold mx-auto">My Skills</h1>
	<div class="flex flex-wrap justify-center gap-4 max-w-7xl mx-auto">
		{#each skills as skill (skill.id)}
			<div class="skill-card px-4 space-y-4 pt-44 group">
				<img
					src={skill.imgLocation}
					alt="python"
					class="object-contain h-11 w-11 grayscale smooth-transition group-hover:grayscale-0"
				/>
				<p class="font-medium text-xl inline-flex justify-between items-center w-full">
					{skill.name}
					<a href={`https://github.com/the-r3aper7?tab=repositories&language=${skill.lang}`}
						><IconArrowUpRight size={22} /></a
					>
				</p>
				<p class="text-base">{skill.description}</p>
			</div>
		{/each}
	</div>
</section>

<style lang="postcss">
	.text-gradient-color {
		background-image: linear-gradient(to right, white 50%, #555555);
	}

	.skill-card {
		@apply h-96 w-[318px] bg-neutral-800 border border-gray-600;
	}

	:global(.btn) {
		@apply hover:bg-gray-900 border-2 border-gray-600 p-3;
	}

	.smooth-transition {
		@apply transition ease-in-out duration-300;
	}
</style>
