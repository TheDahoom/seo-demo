// This file fetches the package size from an api at build time and returns it as a prop to the page
export async function load({ fetch }) {
    let gzip = 0;
    // I have to do this since bundlephobia is down 80% of the time and is causing the build to fail
    try {
        const res = await fetch('https://bundlephobia.com/api/size?package=sk-seo');
        const data = await res.json();
        gzip = (data.gzip / 1000).toFixed(1);
    } catch {
        gzip = 2.8;
    }
    
    const res2 = await fetch('https://api.github.com/repos/TheDahoom/sveltekit-seo');
    const data2 = await res2.json();
    const starCount = data2.stargazers_count;
    
    const res3 = await fetch('https://api.github.com/users/TheDahoom/followers');
    const data3 = await res3.json();
    const followerCount = data3.length;


    if (res2.ok) {
        return { gzip, starCount, followerCount };
    } else {
        this.error(res.status, data.message);
    }
}