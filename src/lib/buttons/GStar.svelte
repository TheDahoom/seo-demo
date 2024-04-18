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

<button>Star: {starCount || 52}</button>

