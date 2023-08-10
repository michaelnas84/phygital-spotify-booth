<script lang='ts'>
    import type { Track } from "spotify-api.js";

    export let track : Track
    export let color : 'black' | 'neutral-900' = 'black'
</script>

<div class="card card-side bg-{color} shadow-xl mt-12 z-10" style="margin-bottom: -2rem">
    <figure><img src={track.album?.images[0].url} alt="" class="w-[8.333vw] h-[8.333vw]"/></figure>
    <div class="flex flex-col justify-around p-[1.666vw]">
        <h2 class="card-title text-4xl whitespace-nowrap overflow-x-clip max-w-[60vw]">{track.name}</h2>
        <p class="text-2xl">{track.album?.name}</p>
    </div>
</div>