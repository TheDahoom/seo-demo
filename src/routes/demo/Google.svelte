<script>
  import InfoIcon from './InfoIcon.svelte';

  import { popup } from '@skeletonlabs/skeleton';
  import { writable } from "svelte/store";

  export let title = writable("Quick Start");
  export let description = writable("Quick start webpage for sk-seo");
//   export let keywords = writable("Quickstart, introduction");

  let icon;
  let dark = false;

  const GoogleInfo = {
	event: 'click',
	target: 'GoogleInfo',
	placement: 'bottom',
};
</script>

<div class="bg-[#202124] rounded-xl">
  <div class="container mx-auto px-4" style="font-family: Arial, sans-serif;">
    <div class="py-2">
        <!-- TODO add button for google title/header info with popup -->
        <!-- Content: Google sometimes sets one of the headers as the title (highlighted in blue) and might also include header or paragraph content in the description aswell  -->
        <div class="relative">
            <button class="btn btn-sm absolute top-0 right-0 bg-none rounded-md px-0 py-0" use:popup={GoogleInfo} ><InfoIcon /></button>
        </div>
        <div class="card p-4 shadow-xl" data-popup="GoogleInfo">
            <div><p>Demo Content</p></div>
            <div class="arrow bg-surface-100-800-token" />
        </div>
        <div class="flex overflow-hidden p-0 pb-0 items-center" >
            <div class="bg-white border border-solid inline-flex justify-center items-center rounded-full mr-3 h-[26px] w-[26px] shrink-0">
                {#if icon !== ""}
                    <svg style="height: 18px;
                    line-height: 18px;
                    width: 18px;" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg>
                {:else}
                <!-- TODO automatic icon filling maybe with base64 conversion or normal image fetching -->
                    <img src="/favicon.ico" alt="icon" class="h-6 w-6" />
                {/if}
            </div>
            <div class="block overflow-hidden">
                <div>
                    <span class="text-[#dadce0] text-sm block whitespace-nowrap">
                        {$title}
                    </span>
                </div>
                <div>
                    <cite class="text-[#bdc1c6] truncate not-italic text-xs/[18px] block whitespace-nowrap">
                        https://www.example.com
                        <span class="text-[#bdc1c6]"> › ...</span>
                    </cite>
                </div>
            </div>
            <div class="mt-[18px] h-[18px] ml-[6px] relative">
                <span class="top-[2px] inline-block relative h-[18px] leading-[18px] w-[18px] fill-[#bdc1c6] cursor-pointer">
                    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                </span>
            </div>
        </div>
        <div class="mt-[6px] mb-[3px]">
            <a href="/demo" class="hover:underline text-xl/[1.3] text-[#8ab4f8]">
                <h3 class="!font-normal">{$title}</h3>
            </a>
        </div>
        <div class="font-normal text-[#bdc1c6] text-sm/[1.58] ">
            {$description}
        </div>
    </div>
</div>
</div>
