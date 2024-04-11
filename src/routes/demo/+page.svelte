<script>
    import Google from './Google.svelte';
    import FakeCodeBlock from './FakeCodeBlock.svelte';
    import Seo from 'sk-seo';

    let title, description, keywords;
    let focusInput;
    // import Seo from '$lib/Seo.svelte';
</script>
<Seo 
    title="Demo"
    description="demo page for sk-seo package"
    keywords="sveltekit, seo, skeleton"
/>
<div>
    <h3 class="h3 text-center mt-4">Preview</h3>
    <div class="h5 text-center mb-1">What your pages (should) look like in social platforms </div>
</div>
<div class="flex flex-col space-between md:flex-row md:h-full md:w-full">
    <div class="h-full w-full p-4">
        <!-- required for copy to work -->
        <FakeCodeBlock bind:this={focusInput} bind:description bind:title bind:keywords />
        <div class="text-center">
            Try editing one of the <button class="hljs-attr cursor-pointer" on:click={() => focusInput.focus()}>props</button>
        </div>
    </div>
    <div class="outline-dotted h-full w-full p-4">
        <!-- just prop by itself wouldnt work for some reason -->
        <div class="h4 font-bold">Google</div>
        <Google title={title} description={description} keywords={keywords} />
        <div class="h4 font-bold">Discord</div>
        <div class="h4 font-bold">Twitter</div>

    </div>
</div>
