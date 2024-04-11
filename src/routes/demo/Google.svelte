<script>
    import { writable } from "svelte/store";

    export let title = writable('Quick Start');
    export let description = writable('Quick start webpage for sk-seo');
    export let keywords = writable('Quickstart, introduction');

    let dark = false;
</script>

    <div class="bg-[#202124]">
        Google
        
        {$keywords}
        <div class="max-w-xl mb-8 font-sans"><div class="group"><a href="/demo" class="text-sml font-OpenSans {dark ? `text-stone-900` : `text-current`}">https://fast.com/</a><a href="/demo"><h2 class="truncate text-xl text-blue-700 group-hover:underline font-OpenSans">{$title}</h2></a></div><p class="line-clamp-2 {dark ? `text-gray-900` : `text-current`} font-OpenSans">{$description}</p></div>
    </div>

