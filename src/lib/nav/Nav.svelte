<script>
    import { getDrawerStore } from "@skeletonlabs/skeleton";

    const drawerStore = getDrawerStore();
    function drawerClose(){
        drawerStore.close();
    }
</script>

<nav class="list-nav p-2">
    <ul>
        <li><a href="/" on:click={drawerClose}>Home</a></li>
        <li><a href="/docs" on:click={drawerClose}>Docs</a></li>
        <li><a href="/demo" on:click={drawerClose}>Demo</a></li>
        <li><a href="/test" on:click={drawerClose}>Test</a></li>
    </ul>
</nav>