import adapter from '@sveltejs/adapter-cloudflare';
// import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: [vitePreprocess()],
	
	vitePlugin: {
		inspector: true,
	},
	kit: {
		// adapter: adapter()
		adapter: adapter({
			routes: {
				include: ['/*'],
				exclude: ['/abc']
			}
		}),
	}
};
export default config;