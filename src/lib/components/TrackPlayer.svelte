<script lang='ts'>
    import type { Track } from "spotify-api.js";

    export let track : Track
    export let color : 'black' | 'neutral-900' = 'black'
</script>

<div class="card card-side bg-{color} shadow-xl mt-0">
    <iframe title="audio_track" class="mt-0" src="{track.previewURL}"></iframe>
</div>