<script>
	import Navbar from '$lib/components/navbar.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { fade, blur } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { on } from 'svelte/events';
	import bosch from '$lib/img/bosch.svg';
	import deloitte from '$lib/img/deloitte.svg';
	import solanabeach from '$lib/img/solanabeach.svg';
	import superteamgermany from '$lib/img/superteamgermany.svg';
	import wmdatenservice from '$lib/img/wmdatenservice.svg';
	import Marquee from 'svelte-fast-marquee';
	import { ChevronRight, Key, Telescope } from 'lucide-svelte';
	import Footer from '$lib/components/footer.svelte';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<Navbar />

{#if mounted}
	<main class="w-full pt-40">
		<div class="mx-auto max-w-6xl px-3 sm:px-6">
			<h1
				class="text-center text-4xl font-semibold sm:text-left sm:text-5xl md:text-6xl"
				in:blur={{ delay: 200, duration: 300 }}
			>
				The <span
					class="bg-gradient-to-br from-[#CD31FF] to-fuchsia-700 bg-clip-text text-transparent"
					>Blocksprint</span
				>
				creates <br /> real business value.
			</h1>
			<p
				class="mt-5 max-w-2xl text-center text-base text-muted-foreground sm:text-left sm:text-lg md:text-xl"
				in:blur={{ delay: 200, duration: 350 }}
			>
				We connect ambitious students with the industry. With our 3-month Blocksprints, we tackle
				exciting challenges in Web3.
			</p>
			<div
				class="mx-auto mt-5 grid w-fit gap-4 sm:mx-0 sm:flex"
				in:blur={{ delay: 200, duration: 400 }}
			>
				<Button>Become a partner</Button>
				<Button variant="ghost" class="flex gap-1">
					<p class="bg-gradient-to-r from-zinc-50 to-zinc-400 bg-clip-text text-transparent">
						Join the Waitlist
					</p>
					<ChevronRight class="h-5 w-5" />
				</Button>
			</div>
		</div>

		<div class="mx-auto mt-32 max-w-6xl px-3 sm:px-6" in:blur={{ delay: 200, duration: 450 }}>
			<h2 class="mb-10 text-center text-base font-medium sm:text-lg md:text-xl">
				Former Project Partners <br /><span class="text-muted-foreground">
					From Startup to Enterprise - we got you.
				</span>
			</h2>
		</div>
		<div in:blur={{ delay: 200, duration: 500 }}>
			<Marquee gap="70px" speed={30}>
				<img src={bosch} alt="Bosch" class="mx-auto h-8" />
				<img src={wmdatenservice} alt="WM Datenservice" class="mx-auto h-8" />
				<img src={deloitte} alt="Deloitte" class="mx-auto h-8" />
				<img src={solanabeach} alt="Solanabeach" class="mx-auto h-8" />
				<img src={superteamgermany} alt="Superteam Germany" class="mx-auto h-8" />
			</Marquee>
		</div>

		<div
			class="relative mx-auto mb-10 mt-32 grid max-w-6xl divide-y divide-zinc-800 border border-zinc-950 px-3 sm:px-6"
			in:blur={{ delay: 200, duration: 550 }}
		>
			<div class="grid- grid divide-zinc-800 sm:grid-cols-2 sm:divide-x">
				<div class="order-2 flex items-center justify-center p-4 sm:order-1 sm:p-10">
					<Telescope
						class="h-56 w-56 text-zinc-800 sm:h-64 sm:w-64 md:h-72 md:w-72"
						strokeWidth=".25"
					/>
				</div>
				<div class="order-1 flex flex-col gap-5 p-4 sm:order-2 sm:p-10">
					<h2 class="text-xl font-semibold text-foreground sm:text-2xl md:text-3xl">Key Factors</h2>
					<p class="text max-w-md text-sm text-muted-foreground sm:text-base md:text-lg">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua.
					</p>
					<Button class="w-fit text-sm" variant="secondary">Previous Projects</Button>
				</div>
			</div>
			<div class="grid divide-zinc-800 sm:grid-cols-2 sm:divide-x">
				<div class="flex flex-col gap-5 p-4 sm:p-10">
					<h2 class="text-xl font-semibold text-foreground sm:text-2xl md:text-3xl">Our Vision</h2>
					<p class="text max-w-md text-sm text-muted-foreground sm:text-base md:text-lg">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua.
					</p>
					<Button class="w-fit text-sm" variant="secondary">About Us</Button>
				</div>
				<div class="flex items-center justify-center p-4 sm:p-10">
					<Key class="h-56 w-56 text-zinc-800 sm:h-64 sm:w-64 md:h-72 md:w-72" strokeWidth=".25" />
				</div>
			</div>
		</div>

		<div
			class="mt-16 flex w-full items-center bg-gradient-to-b from-zinc-950 to-zinc-900 sm:mt-20 md:mt-24"
		>
			<div
				class="mx-auto my-auto flex w-full max-w-6xl flex-col justify-between gap-8 px-3 py-16 sm:px-6 sm:py-20 md:flex-row md:py-24"
			>
				<p class="text-center text-4xl font-semibold sm:text-5xl md:text-left md:text-6xl">
					Ready to join <br />
					and partner up?
				</p>
				<div class="mx-auto flex flex-col justify-between md:mx-0">
					<div></div>
					<div
						class="mx-auto grid w-fit gap-4 sm:mx-0 sm:flex"
						in:blur={{ delay: 200, duration: 400 }}
					>
						<Button>Become a partner</Button>
						<Button variant="ghost" class="flex gap-1">
							<p class="bg-gradient-to-r from-zinc-50 to-zinc-400 bg-clip-text text-transparent">
								Join the Waitlist
							</p>
							<ChevronRight class="h-5 w-5" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	</main>
	<Footer />
{/if}
