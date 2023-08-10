<script lang='ts'>
	import { createEventDispatcher, onMount } from "svelte"

    let video : HTMLVideoElement
    let output : HTMLCanvasElement

    const numbers = ['3', '2', '1']
    let countdown = -1

    const dispatch = createEventDispatcher()

    const pauseCamera = async () => {
        video.pause()
    }

    onMount(async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video : true
            })
            video.srcObject = stream
            video.play()
        }
        catch (error) {
            // console.log(error)
        }
    })

    async function takepicture() {
        const ctx = output.getContext('2d');

        // Set the canvas size to match the desired aspect ratio
        output.width = video.clientWidth;
        output.height = video.clientHeight;

        // Calculate the aspect ratio of the video element
        const videoAspectRatio = video.videoWidth / video.videoHeight;

        // Calculate the width and height of the cropped rectangle
        let cropWidth, cropHeight;
        if (videoAspectRatio > output.width / output.height) {
            cropWidth = video.videoHeight * (output.width / output.height);
            cropHeight = video.videoHeight;
        } else {
            cropWidth = video.videoWidth;
            cropHeight = video.videoWidth * (output.height / output.width);
        }

        // Calculate the x and y coordinates of the top-left corner of the cropped rectangle
        const cropX = (video.videoWidth - cropWidth) / 2;
        const cropY = (video.videoHeight - cropHeight) / 2;

        // Draw the cropped video onto the canvas
        ctx?.drawImage(video, cropX, cropY, cropWidth, cropHeight, 0, 0, output.width, output.height);
        pauseCamera()
        return output.toDataURL()
    }

    function handleClick() {
        const interval = setInterval(async () => {
            if (countdown == 2) {
                clearInterval(interval)
                const image = await takepicture()
                dispatch('capture', {
                    image : image
                })
                countdown = -1
            }
            else {
                countdown += 1
            }
        }, 1000)
    }

</script>

<div class="carousel-item w-screen h-screen flex flex-col justify-center items-center box-border space-y-[2vw]">
    <h1 class="font-['Gotham'] font-medium text-4xl">Sorria para a foto!</h1>
    <form class="bg-neutral-900 rounded-[10px] w-[76vw] h-[74vh] p-[2.7vw] flex flex-col items-center" action="">
        <div class="flex w-full h-full items-center">
            <div class="flex-1 text-9xl flex flex-col items-start h-full justify-between">
                {#each numbers as number, i}
                    <span class={i > countdown ? 'invisible' : 'visible'}>{number}</span>
                {/each}
            </div>
            <!-- svelte-ignore a11y-media-has-caption -->
            <div class="flex flex-col h-full justify-between">
                <video bind:this={video} class="w-[28vw] h-[28vw] object-cover"/>
                <button on:click={handleClick} class="font-medium text-4xl text-white font-['Gotham'] bg-green-500 rounded-[10px] py-[1em] px-[2em]">Xiiiis!</button>
            </div>
            <div class="flex-1 text-9xl flex flex-col items-end h-full justify-between">
                {#each numbers as number, i}
                    <span class={i > countdown ? 'invisible' : 'visible'}>{number}</span>
                {/each}
            </div>
        </div>
    </form>
    <canvas class="hidden" bind:this={output}></canvas>
</div>