<script>
	// import Seo from 'sk-seo';
	// import Seo from '$lib/Seo.svelte';
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>
<!-- <Seo imageURL="/seo.png"
logo="/favicon.png"
author="Dahoom AlShaya"
name="Dahoom AlShaya"
socials={[
	 'https://twitter.com/TheDahoom',
	 'https://instagram.com/TheDahoom',
	 'https://github.com/TheDahoom',
	 'https://linkedin.com/in/dahoom'
]} /> -->
<svelte:head>
	<meta name="google-site-verification" content="iVDzQJO-Ai8tAdUUwZdmZhLeKFb5Msda6ZOJVENCg30" />
</svelte:head>
<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/">
					<strong class="text-xl">sk-seo</strong>
				</a>
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
	<!-- Page Route Content -->
	<slot />
</AppShell>
