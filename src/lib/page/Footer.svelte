<script>
    export let version;
</script>
<div class="w-full flex flex-col justify-end min-h-40 z-50 variant-glass-surface !backdrop-blur-sm relative p-6 md:p-8">
    <div class="absolute top-0 left-0 pointer-events-none w-full h-full opacity-10 bg-gradient-to-b from-transparent to-surface-500"></div>
    <div class="flex justify-center md:justify-between pb-2">
        <div>
            <strong>Sk-seo</strong> <span class="badge variant-soft">{version}</span>
        </div>
    </div>
    <hr class="!border-t-2" />
    <div class="flex justify-center md:justify-between">
        <a href="https://github.com/TheDahoom/Sveltekit-seo?tab=MIT-1-ov-file#readme" class="hidden md:block">MIT License</a>
        <div class="text-center flex flex-row flex-wrap">
            <a href="https://github.com/TheDahoom/Sveltekit-seo?tab=MIT-1-ov-file#readme" class="btn md:hidden block">MIT License</a>
            <a href="https://github.com/TheDahoom/Sveltekit-seo" class="btn">github</a>
            <a href="https://dahoom.com" class="btn">dahoom</a>
        </div>
    </div>
</div>
