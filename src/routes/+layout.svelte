<script>
	import GithubIcon from '$lib/Icons/GithubIcon.svelte';

	import Seo from 'sk-seo';
	import Nav from '$lib/nav/Nav.svelte';
	import Footer from '$lib/page/Footer.svelte';
	// import Seo from '$lib/Seo.svelte';
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch, initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	import { routes } from '$lib/page/navigation';
	import { page } from '$app/stores';
	export let data;

	$: classesSidebar = !$page.url.pathname.includes('/docs') ? 'w-0' : 'w-0 lg:w-64';

	//hljs stuff for code blocks
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import shell from 'highlight.js/lib/languages/shell';
	import javascript from 'highlight.js/lib/languages/javascript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('shell', shell);
	hljs.registerLanguage('javascript', javascript);
	storeHighlightJs.set(hljs);

	//Drawer init
	initializeStores();
	const drawerStore = getDrawerStore();
	function drawerOpen(){
		drawerStore.open();
	}

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
<Drawer>
	<h2 class="p-4">Navigation</h2>
	<hr />
	<Nav />
</Drawer>
<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 {classesSidebar}">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="lg:hidden btn btn-sm mr-2" on:click={drawerOpen}>
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
			<div class="text-center hidden md:block">
				{#each routes as route}
					<a class="btn btn-md" href="{route.path}">{route.name}</a>
				{/each}
			</div>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<a target="_blank" href="https://github.com/Thedahoom/sveltekit-seo" ><GithubIcon /></a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Nav />
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">
		<Footer version={data.version} />
	</svelte:fragment>
	
</AppShell>
