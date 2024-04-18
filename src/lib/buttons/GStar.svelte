<script>
  import { onMount } from "svelte";

	let starCount;

	onMount(async () => {
		const response = await fetch('https://api.github.com/repos/TheDahoom/sveltekit-seo');
		const data = await response.json();
		starCount = data.stargazers_count;
		console.log(data);
	});
</script>

<a target="_blank" href="https://github.com/TheDahoom/sveltekit-seo" class="input-group w-fit input-group-divider grid-cols-[auto_1fr_auto]">
	<button class=" !px-2">Star</button>
	<div class="input-group-shim !px-2"> {starCount || 52}</div>
</a>

