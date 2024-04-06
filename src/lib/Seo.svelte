<script>
    import { browser } from "$app/environment";
    import { page } from "$app/stores";
    
    export let title = "";
    export let description = "";
    export let keywords = "";
    export let siteName = "";
    export let index = true;
    export let twitter = true;
    export let openGraph = true;
    export let schemaOrg = false;
    export let imageURL = "";
    export let logo = "";
    export let author = "";
    export let socials = [];
    export let name = "";

    let socialsString = socials.map(e => e.url).join(", ");

    let jsonLd = {
        "@context": "https://schema.org",
        "@type":  ['Person', 'Organization'],
        "name": `${name}`,
        "url": `${$page.url.origin}`,
        "image": `${imageURL}`,
        logo: {
            "@type": "ImageObject",
            "url": `${logo}`,
            "width": 48,
            "height": 48
        },
        "sameAs": [
            `${socialsString}`
        ]
    };
    let jsonLdStrung = JSON.stringify(jsonLd);
    let jsonLdScript = `
    <script type="application/ld+json">
        ${jsonLdStrung}
    ${'<'}/script>`;
</script>
<svelte:head>
    {#if browser}
        {#if document.querySelector('meta[name="robots"]') === null}
        <meta name="robots" content={index ? "index, follow" : "noindex"} />
        {/if}
        {#if title !== "" && document.querySelector('meta[name="title"]') === null}
            <title>{title}</title>
        {/if}
        {#if description !== "" && document.querySelector('meta[name="description"]') === null}
            <meta name="description" content="{description}" />
        {/if}
        {#if keywords !== "" && document.querySelector('meta[name="keywords"]') === null}
            <meta name="keywords" content="{keywords}" />
        {/if}
        {#if author !== "" && document.querySelector('meta[name="author"]') === null}
            <meta name="author" content="{author}" />
        {/if}
        
        <!-- Open Graph Meta Tags -->
        {#if openGraph}
            {#if siteName !== "" && document.querySelector('meta[property="og:site_name"]') === null}
                <meta property="og:site_name" content="{siteName}">
            {/if}        
            <meta property="og:url" content="{$page.url}">
            <meta property="og:type" content="website">
            {#if title !== "" && document.querySelector('meta[property="og:title"]') === null}
                <meta property="og:title" content="{title}">
            {/if}
            {#if description !== "" && document.querySelector('meta[property="og:description"]') === null}
                <meta property="og:description" content="{description}">
            {/if}
            {#if imageURL !== "" && document.querySelector('meta[property="og:image"]') === null}
                <meta property="og:image" content="{imageURL}">
            {/if}
        {/if}

        <!-- Twitter Meta Tags -->
        {#if twitter}
            {#if document.querySelector('meta[name="twitter:card"]') === null}
            <meta name="twitter:card" content="summary_large_image">
            {/if}
            {#if document.querySelector('meta[property="twitter:domain"]') === null}
            <meta property="twitter:domain" content="{$page.url.host}">
            {/if}
            {#if document.querySelector('meta[property="twitter:url"]') === null}
            <meta property="twitter:url" content="{$page.url}">
            {/if}
            {#if title !== "" && document.querySelector('meta[name="twitter:title"]') === null}
                <meta name="twitter:title" content="{title}">
            {/if}
            {#if description !== "" && document.querySelector('meta[name="twitter:description"]') === null}
            <meta name="twitter:description" content="{description}">
            {/if}
            {#if imageURL !== "" && document.querySelector('meta[name="twitter:image"]') === null}
            <meta name="twitter:image" content="{imageURL}">
            {/if}
        {/if}

        <!-- JSON-LD Schema -->
        {#if schemaOrg || socials != [] || logo !== "" || name !== ""}
            {#if document.querySelector('script[type="application/ld+json"]') === null}
                {@html jsonLdScript}
            {/if}
        {/if}
    {/if}
</svelte:head>

