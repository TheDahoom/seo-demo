// This file fetches the package size from an api at build time and returns it as a prop to the page
export async function load({ fetch }) {
    let gzip = 0;
    // I have to do this since bundlephobia is down 80% of the time and is causing the build to fail
    try {
        const res = await fetch('https://bundlephobia.com/api/size?package=sk-seo');
        const data = await res.json();
        gzip = (data.gzip / 1000).toFixed(1);
    } catch {
        // Maybe try to calculate gzip size at build time?
        gzip = 2.8;
    }
    
    let starCount, forkCount, res2;
    try {
        res2 = await fetch('https://api.github.com/repos/TheDahoom/sveltekit-seo');
        const data2 = await res2.json();
        starCount = data2.stargazers_count;
        forkCount = data2.forks_count;
    } catch {
        starCount = 91;
        forkCount = 1;
    }


    if (res2 !== null) {
        return { gzip, starCount, forkCount };
    } else {
        return { gzip, starCount: 91, forkCount: 1 };
        this.error(res.status, data.message);
    }
}