<script>
	import Seo from 'sk-seo';
	import Nav from '../lib/nav/Nav.svelte';
	// import Seo from '$lib/Seo.svelte';
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>
<Seo imageURL="/seo.png"
	logo="/favicon.png"
	author="Dahoom AlShaya"
	name="Dahoom AlShaya"
	socials={[
		'https://dahoom.com',
		'https://www.reddit.com/u/TheDahoom/',
		'https://twitter.com/TheDahoom',
		'https://instagram.com/TheDahoom',
		'https://github.com/TheDahoom',
		'https://linkedin.com/in/dahoom'
	]} />
<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="lg:hidden btn btn-sm mr-2">
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<a href="/">
						<strong class="text-xl whitespace-nowrap">sk-seo</strong>
					</a>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<a
					class="btn btn-sm variant-ghost-surface"
					href="/docs"
				>
					docs
				</a>
				<a
				class="btn btn-sm variant-ghost-surface {$page.path === '/' ? 'active' : ''}"
				href="/demo"
				>
					demo
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="/test"
				>
					test
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Nav />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
