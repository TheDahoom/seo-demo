<script>
    import Seo from 'sk-seo';
    let url = "";
    let seoTags = null;

    let search = async () => {
        try {
            const response = await fetch(`https://${url}`);
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const head = doc.head;
            seoTags = {
                title: head.querySelector('title')?.innerText,
                description: head.querySelector('meta[name="description"]')?.content,
                keywords: head.querySelector('meta[name="keywords"]')?.content,
                robots: head.querySelector('meta[name="robots"]')?.content,
            };
        } catch (error) {
            console.error('Error:', error);
        }
    };
</script>
<Seo 
    title="Test your site"
    description="Test the SEO viability of your site"
    keywords="test, seo, skeleton"
/>
<div class="h-screen mx-auto flex justify-center items-center">
    <div class="space-y-10 text-center flex flex-col items-center">
        <h3 class="h3">Test SEO viability of your site</h3>
        <div class="input-group flex input-group-divider grid-cols-[auto_1fr_auto]">
            <input class="input" title="Input (url)" type="url" bind:value={url} placeholder="example.com" />
            <button class="variant-filled-secondary" on:click={search}>Submit</button>
        </div>
    </div>
</div>
{#if seoTags}
    <div>
        <p>Title: {seoTags.title}</p>
        <p>Description: {seoTags.description}</p>
        <p>Keywords: {seoTags.keywords}</p>
        <p>Robots: {seoTags.robots}</p>
    </div>
{/if}