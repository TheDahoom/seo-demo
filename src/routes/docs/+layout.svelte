<script>
    // Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import shell from 'highlight.js/lib/languages/shell';
	import javascript from 'highlight.js/lib/languages/javascript';
	// import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('shell', shell);
	hljs.registerLanguage('javascript', javascript);
	// hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);
</script>
<!-- <div class="flex flex-row justify-center w-full"> -->
	<slot />
<!-- </div> -->