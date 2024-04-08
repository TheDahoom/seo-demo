<script>
  import FakeCodeBlock from './FakeCodeBlock.svelte';

    import Seo from 'sk-seo';
    import { CodeBlock } from '@skeletonlabs/skeleton';

    // import Seo from '$lib/Seo.svelte';
</script>
<Seo 
    title="Demo"
    description="demo page for sk-seo package"
    keywords="sveltekit, seo, skeleton"
/>
<div class="flex flex-col space-between md:flex-row w-full h-full">
    <FakeCodeBlock></FakeCodeBlock>
    <div class="outline-dotted h-full w-full">
        <div>
            example google view
        </div>
        <div>
            example discord view
        </div>
        <div>
            example twitter view
        </div>
    </div>
</div>
