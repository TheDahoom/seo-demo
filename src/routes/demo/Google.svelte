<script>
  import { writable } from "svelte/store";

  export let title = writable("Quick Start");
  export let description = writable("Quick start webpage for sk-seo");
  export let keywords = writable("Quickstart, introduction");

  let dark = false;
</script>

<div class="bg-[#202124] rounded-xl">
  <div class="container mx-auto px-4">

</div>
  {$keywords}
  create a google search results component
</div>
