import { page } from '$app/stores';
import { redirect } from '@sveltejs/kit';

// This file fetches the package size from an api at build time and returns it as a prop to the page
export async function load({ fetch }) {
    // -- temp start fix google shenanigans
	if ($page.url.host.includes('pages.dev')){
		console.log('includes pages.dev')
		redirect(301,'https://skseo.dev'+$page.url.pathname);
	}
    // -- temp end
    const res = await fetch('https://bundlephobia.com/api/size?package=sk-seo');
    const data = await res.json();
    const gzip = (data.gzip / 1000).toFixed(1);

    const res2 = await fetch('https://api.github.com/repos/TheDahoom/sveltekit-seo');
    const data2 = await res2.json();
    const starCount = data.stargazers_count;
    
    const res3 = await fetch('https://api.github.com/repos/TheDahoom/followers');
    const data3 = await res3.json();
    const followerCount = data3.length;

    if (res.ok) {
        return { gzip, starCount, followerCount };
    } else {
        this.error(res.status, data.message);
    }
}