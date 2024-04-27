<script>
    import Seo from 'sk-seo';
    import { CodeBlock } from '@skeletonlabs/skeleton';
</script>
<Seo 
    title="Getting started"
    description="Getting started with sk-seo"
    keywords="sveltekit, seo, skeleton"
/>
<div class="w-full h-full mb-5 flex justify-center items-center">
	<div class="space-y-5 mx-2 flex flex-col items-center">
        <h2 class="h2 mt-7">Quick Start</h2>
        <h3 class="h3">Install</h3>
        <CodeBlock class={'w-full'} language="shell" code={`npm i -D sk-seo`}></CodeBlock>
        <h3 class="h3">import</h3>
        <CodeBlock class={'w-full'} language="javascript" code={`import Seo from 'sk-seo';`}></CodeBlock>
        <h3 class="h3">Use</h3>
        <CodeBlock language="xml" code={`<Seo title="Quick Start" \ndescription="Quick start webpage for sk-seo" \nkeywords="Quickstart, introduction" />`}></CodeBlock>
        <h3 class="h3">Thats all!</h3>
        <button class="btn variant-filled">Advanced use</button>
    </div>
</div>