<script>
	import { Button } from '$lib/components/ui/button/index.js';
	import { scramble } from '$lib/utils/scramble.js';
	import tbc from '$lib/img/tbc.svg';
	import { Menu, X } from 'lucide-svelte';

	let menuOpen = false;
</script>

<header class="fixed top-0 z-50 w-full px-3 pt-5 transition-all duration-300 md:px-5">
	<nav
		class:h-dvh={menuOpen}
		class="z-50 mx-auto h-12 w-full rounded-2xl border border-zinc-800 bg-zinc-950 bg-opacity-60 px-3 py-2 backdrop-blur-xl transition-all duration-300 sm:max-w-6xl"
	>
		<div class="flex w-full items-center justify-between">
			<a
				href="https://blocksprint.tum-blockchain.com"
				class="flex items-center justify-center gap-2"
			>
				<img src={tbc} alt="TUM Blockchain Club" class="h-7 w-7" />
				<p class="hidden text-foreground sm:flex">TUM BLOCKCHAIN CLUB</p>
			</a>

			<div class="hidden items-center gap-8 text-sm lg:flex">
				<a
					href="/projects"
					class="w-[71px] overflow-hidden whitespace-nowrap"
					id="projects"
					onmouseenter={() => {
						scramble('projects', 'PROJECTS');
					}}
					onmouseleave={() => (document.getElementById('projects').innerText = 'PROJECTS')}
				>
					PROJECTS
				</a>
				<a
					href="/students"
					class="w-[70px] overflow-hidden whitespace-nowrap"
					id="students"
					onmouseenter={() => {
						scramble('students', 'STUDENTS');
					}}
					onmouseleave={() => (document.getElementById('students').innerText = 'STUDENTS')}
				>
					STUDENTS
				</a>
				<a
					href="/partners"
					class="w-[71px] overflow-hidden whitespace-nowrap"
					id="partners"
					onmouseenter={() => {
						scramble('partners', 'PARTNERS');
					}}
					onmouseleave={() => (document.getElementById('partners').innerText = 'PARTNERS')}
				>
					PARTNERS
				</a>
				<a
					href="/about"
					class="w-[47px] overflow-hidden whitespace-nowrap"
					id="about"
					onmouseenter={() => {
						scramble('about', 'ABOUT');
					}}
					onmouseleave={() => (document.getElementById('about').innerText = 'ABOUT')}
				>
					ABOUT
				</a>
			</div>
			<div class="flex h-8 items-center sm:gap-4">
				<Button class="hidden h-8 text-sm sm:flex" variant="secondary">Contact</Button>
				<Button class="hidden h-8 text-sm sm:flex">Partnership</Button>
				<Button
					variant="invisible"
					class="flex items-center justify-center sm:hidden"
					onclick={() => {
						menuOpen = !menuOpen;
					}}
				>
					{#if menuOpen}
						<X class="h-8 w-8 text-zinc-50" />
					{:else}
						<Menu class="h-w h-8 text-zinc-50" />
					{/if}
				</Button>
			</div>
		</div>
	</nav>
</header>
