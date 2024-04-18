<script>
    import { onMount } from "svelte";
    import GithubIcon from "../Icons/GithubIcon.svelte";
    
    export let data;
    let followCount;

    onMount(async () => {
        const response = await fetch('https://api.github.com/repos/TheDahoom/sveltekit-seo');
        const data = await response.json();
        followCount = data.stargazers_count;
        console.log(data);
    });
  </script>
  
  <a target="_blank" href="https://github.com/TheDahoom" class="input-group w-fit input-group-divider grid-cols-[auto_1fr_auto]">
    <button class="!px-2">
        <GithubIcon classes={"scale-[75%] -ml-1"} />
        Follow
    </button>
      <div class="input-group-shim !px-2"> {(followCount || data.followCount) || 2}</div>
  </a>
  
  