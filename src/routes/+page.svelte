<script lang='ts'>
    import '$lib/firebase.ts'
	import type { Track } from "spotify-api.js";
	import Consent from "$lib/slides/Consent.svelte";
	import DataCapture from "$lib/slides/DataCapture.svelte";
	import Idle from "$lib/slides/Idle.svelte";
	import MusicConfirm from "$lib/slides/MusicConfirm.svelte";
	import PhotoCapture from "$lib/slides/PhotoCapture.svelte";
	import PhotoConfirm from "$lib/slides/PhotoConfirm.svelte";
	import Search from "$lib/slides/Search.svelte";
	import ThankYou from "$lib/slides/ThankYou.svelte";
    import { addDoc, collection, getFirestore } from 'firebase/firestore'
    import SkipPrevious from 'svelte-material-icons/SkipPrevious.svelte'
    import SkipNext from 'svelte-material-icons/SkipNext.svelte'

    let container : HTMLElement

    let _track : Track | undefined
    let _image : string | undefined
    let data : {}

    const visited : number[] = []

    let hasNext = false
    let currentSlide = 0

    $: {
        if (container != undefined) {
            const maxVisited = Math.max(...visited)
            const maxWidth = maxVisited * container.clientWidth
            // console.log(maxVisited)
            // console.log(currentSlide)
            hasNext = currentSlide < maxVisited
        }
    }

    $: track = (_track ?? ({} as any) as Track)
    $: image = _image ?? ''

    function onPlay() {
        next(1)
    }

    function onDataCapture(event : any) {
        data = event.detail
        next(2)
    }

    function onAgreed() {
        next(3)
    }

    function onSelectTrack(event : CustomEvent<any>) {
        _track = event.detail.track
        next(4)
    }

    function onMusicConfirm() {
        next(5)
    }

    function onPhotoCapture(event : CustomEvent<any>) {
        _image = event.detail.image
        const db = getFirestore()
        addDoc(collection(db, 'leads'), {
            ...data,
            image : _image,
            track : track.uri
        })
        next(6)
    }

    function onPhotoConfirm() {
        next(7)
        setTimeout(() => {
            location.reload()
        }, 5000)
    }

    function next(index : number) {
        if (!visited.includes(index)) {
            visited.push(index)
        }
        container.scrollTo({
            left : container.clientWidth * index
        })
    }

    function onScroll(event : UIEvent & {
        currentTarget: EventTarget & HTMLDivElement;
    }) {
        const maxVisited = Math.max(...visited)
        const maxWidth = maxVisited * container.clientWidth
        if (container.scrollLeft > maxWidth) {
            container.style.scrollBehavior = 'unset'
            container.scrollTo({
                left : Math.floor(container.scrollLeft / container.clientWidth) * container.clientWidth
            })
            container.style.scrollBehavior = 'smooth'
        }
        currentSlide = Math.round(container.scrollLeft / container.clientWidth)
    }

</script>

<div bind:this={container} on:scroll={onScroll} class="carousel w-screen h-screen bg-black">
    <Idle on:click={onPlay}/>
    <DataCapture on:submit={onDataCapture}/>
    <Consent on:agreed={onAgreed}/>
    <Search on:select={onSelectTrack}/>
    <MusicConfirm on:click={onMusicConfirm} {track}/>
    <PhotoCapture on:capture={onPhotoCapture}/>
    <PhotoConfirm on:click={onPhotoConfirm} {image} {track} {data}/>
    <ThankYou/>
</div>

{#if currentSlide != 0 && currentSlide != 7}
    <div class="flex w-screen justify-center absolute bottom-[1vw]">
        <button on:click={() => next(currentSlide - 1)}>
            <SkipPrevious size={'2vw'}/>
        </button>
        <div class="w-[6vw]"></div>
        <button disabled={!hasNext} on:click={() => next(currentSlide + 1)}>
            <SkipNext class={hasNext ? '' : "text-zinc-700"} size={'2vw'}/>
        </button>
    </div>
{/if}