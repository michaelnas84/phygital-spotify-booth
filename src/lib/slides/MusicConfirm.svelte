<script lang='ts'>
	import type { Track } from "spotify-api.js";
	import TrackCard from "$lib/components/TrackCard.svelte";
	import TrackPlayer from "$lib/components/TrackPlayer.svelte";

    export let track : Track
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click class="carousel-item w-screen h-screen flex flex-col justify-center items-center">
    <h2 class="font-['Gotham'] font-medium text-4xl text-white">Confirme sua seleção</h2>
    <TrackCard {track} color='neutral-900'/>
    {#if track.previewURL}
    <TrackPlayer {track} color='neutral-900'/>
    {/if}
</div>