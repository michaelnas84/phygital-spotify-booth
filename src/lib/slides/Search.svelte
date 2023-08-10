<script lang='ts'>
	import { createEventDispatcher, onMount } from "svelte";
    import { Client, Track } from 'spotify-api.js'
    import Magnify from 'svelte-material-icons/Magnify.svelte'
	import TrackCard from "$lib/components/TrackCard.svelte";

    const dispatch = createEventDispatcher()

    let search : string
    let token : string
    let results : Track[] | undefined

    onMount(async () => {
        const response = await fetch('/search')
        token = await response.json().then(json => json.token)
    })
    
    async function onSubmit() {
        const client = new Client({token : token})
        results = (await client.search(search, {types : ['track']})).tracks
    }

    function onSelect(track : Track) {
        dispatch('select', {
            track : track
        })
    }
</script>

<div class="carousel-item w-screen h-screen flex justify-center items-center box-border">
    <div class="bg-neutral-900 rounded-[10px] w-[76vw] h-[74vh] flex flex-col p-4 items-center">
        <form class="flex w-full">
            <div class="flex-1 join">
                <svg viewBox="0 0 24 24" width="1em" height="1em" class="input w-16 join-item rounded-l-full text-black"><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" fill="#000"></path></svg>
                <input class="input rounded-r-full w-full join-item overflow-hidden focus:outline-none text-2xl text-black" type="text" on:keyup={onSubmit} bind:value={search}>
            </div>
            <div class="flex-[1]"></div>
            <button></button>
        </form>
        {#if results != undefined}
            <div class="space-y-4 m-2 p-2 w-full overflow-y-scroll">
                {#each results as result}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div class="transition-transform active:scale-[97%]" on:click={() => onSelect(result)}>
                        <TrackCard track={result}/>
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>