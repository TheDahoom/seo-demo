<script>
  import { onMount } from "svelte";
  import StarIcon from "../Icons/StarIcon.svelte";

	export let data;
	let starCount;

	onMount(async () => {
		const response = await fetch('https://api.github.com/repos/TheDahoom/sveltekit-seo');
		const ret = await response.json();
		starCount = ret.stargazers_count;
	});
</script>

<a target="_blank" href="https://github.com/TheDahoom/sveltekit-seo" class="input-group w-fit input-group-divider grid-cols-[auto_1fr_auto]">
	<button class="!px-2">
		<StarIcon classes={"scale-[75%] -ml-1"} />
		Star
	</button>
	<div class="input-group-shim !px-2"> {(starCount || data.starCount ) || 52 }</div>
</a>

