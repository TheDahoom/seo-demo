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
    <div class="h5 text-center mb-1">What your website (should) look like in different platforms </div>
</div>
<div class="flex flex-col space-between md:flex-row md:h-screen md:w-full">
    <div class="h-full w-full p-4">
        <!-- required for copy to work -->
        <FakeCodeBlock bind:this={focusInput} bind:description bind:title bind:keywords />
        <div class="text-center">
            Try editing one of the <button class="hljs-attr cursor-pointer" on:click={() => focusInput.focus()}>props</button>
        </div>
    </div>
    <div class="outline-dotted h-full w-full p-4">
        <div class="h4 font-bold">Google</div>
        <Google {title} {description} {keywords} />
        <div class="h4 font-bold">Discord</div>
        <article class="w-max-[432px] border-l-4" style="background: hsl( 220 calc( 1 * 6.5%) 18% / 1); border-left-color: hsl( 225 calc( 1 * 6.3%) 12.5% / 1);">
            hello
        </article>
        <div class="h4 font-bold">Twitter</div>

    </div>
</div>
