<script>
    import { writable } from "svelte/store";
    
    export let title = writable('Quick Start');
    export let description = writable('Quick start webpage for sk-seo');
    export let keywords = writable('Quickstart, introduction');
</script>

    <div>
        {$title}
        {$description}
        {$keywords}
        example google view
    </div>

