<script>
    import FakeCodeBlock from './FakeCodeBlock.svelte';
    import Seo from 'sk-seo';
    import { CodeBlock } from '@skeletonlabs/skeleton';
    let description;
    
    // import Seo from '$lib/Seo.svelte';
</script>
<Seo 
    title="Demo"
    description="demo page for sk-seo package"
    keywords="sveltekit, seo, skeleton"
/>
<div class="flex flex-col space-between md:flex-row md:h-full md:w-full">
    <div class="h-full w-full p-4">
        <!-- required for copy to work -->
        <FakeCodeBlock bind:description={description} />
        Try editing one of the <span class="hljs-attr">props</span>
    </div>
    <div class="outline-dotted h-full w-full p-4">
        <div>
            example google view
            {#if $description}
                {$description}
            {/if}
        </div>
        <div>
            example discord view
        </div>
        <div>
            example twitter view
        </div>
    </div>
</div>
