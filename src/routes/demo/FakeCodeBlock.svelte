<script>
    import { copyToClipboard } from "$lib/scripts/clipboard";
    import { writable } from "svelte/store";
    
    let code = "";
    let button = "btn btn-sm variant-soft !text-white";
    let buttonLabel = "Copy";
    let buttonCopied = "\u{1F44D}";
    let copyState = false;
    export let description = writable('Quick start webpage for sk-seo');

    async function onCopyClick() {
        copyState = true;
        code = code.innerText.replace('description="', `description="${$description}`);
        await copyToClipboard(code);
        setTimeout(() => {
            copyState = false;
        }, 2e3);
    }
</script>
<div
  class="codeblock overflow-hidden shadow bg-neutral-900/90 text-sm text-white rounded-container-token"
  data-testid="codeblock"
>
  <header
    class="codeblock-header text-xs text-white/50 uppercase flex justify-between items-center p-2 pl-4"
  >
    <span class="codeblock-language">Svelte</span>
    <button type="button" class="codeblock-btn {button}" on:click={onCopyClick}>
        {!copyState ? buttonLabel : buttonCopied}
    </button>
  </header>
  <pre bind:this={code} class="codeblock-pre whitespace-pre-wrap break-all p-4 pt-1"><code
      class="codeblock-code language-xml lineNumbers"
      ><span class="hljs-tag"
        >&lt;<span class="hljs-name">Seo</span> <span class="hljs-attr"
          >title</span
        >=<span class="hljs-string">"Quick Start"</span> 
<span class="hljs-attr">description</span>="<input
          class="hljs-string bg-none"
          bind:value={$description}
          size={$description.length - $description.length/25 || 1}
        />"
<span class="hljs-attr">keywords</span>=<span class="hljs-string"
          >"Quickstart, introduction"</span
        > /&gt;</span
      ></code
    ></pre>
</div>

<style>
  input.hljs-string {
    font: inherit;
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    outline: none;
  }
</style>
