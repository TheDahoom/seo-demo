<script>
    export let version;
</script>
<div class="w-full flex flex-col justify-end min-h-40 z-50 variant-glass-surface !backdrop-blur-sm relative p-6 md:p-8">
    <div class="absolute top-0 left-0 pointer-events-none w-full h-full opacity-10 bg-gradient-to-b from-transparent to-surface-500"></div>
    <div class="flex justify-center md:justify-between pb-2">
        <div>
            Sk-seo <span class="badge variant-soft">{version}</span>
        </div>
    </div>
    <hr class="!border-t-2" />
    <div class="flex justify-center md:justify-between">
        <div class=" hidden md:block">hi</div>
        <div class=" text-center">
            <a href="/" class="btn">linkedin</a>
            <a href="/" class="btn">github</a>
            <a href="/" class="btn">twitter</a>
            <a href="/" class="btn">youtube</a>
        </div>
    </div>
</div>
