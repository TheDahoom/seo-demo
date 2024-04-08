export async function load({ fetch }) {
    const res = await fetch('https://bundlephobia.com/api/size?package=sk-seo');
    const data = await res.json();
    
    if (res.ok) {
        return { props: { gzip: data.gzip } };
    } else {
        this.error(res.status, data.message);
    }
}