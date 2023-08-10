<script lang='ts'>
	import type { Track } from "spotify-api.js";
    import SkipPrevious from 'svelte-material-icons/SkipPrevious.svelte'
    import PlayCircle from 'svelte-material-icons/PlayCircle.svelte'
    import SkipNext from 'svelte-material-icons/SkipNext.svelte'
    import Heart from 'svelte-material-icons/Heart.svelte'
    import html2canvas from 'html2canvas'
    export let image : string
    export let track : Track
    export let data : any

    function getDurationString(duration : number) {
        const second = 1000
        const minute = second * 60

        const minutes = Math.floor(duration / minute)
        const seconds = Math.ceil((duration % minute) / second)

        return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`
    }

    function printFrame() {
        const pdfBody = document.getElementById('pdf-body')!
        html2canvas(pdfBody, {
            logging: true,
            allowTaint: false,
            useCORS: true,
            scale: 3
        }).then(canvas => {
            var tela_impressao = window.open('about:blank')!
                tela_impressao.document.body.appendChild(canvas)
                tela_impressao.document.body.children[0].style.width = '100%'
                tela_impressao.document.body.children[0].style.removeProperty('height')
                tela_impressao.window.print()
                tela_impressao.window.close()
                const nextFinish = document.getElementById('next-finish')!
                nextFinish.click()
                sendMail(canvas, data)
        })
    }

    function sendMail(item: any, data: any) {
        const formData = new FormData()
        formData.append('img', item.toDataURL())
        formData.append('email', data.email)

        fetch('https://flowih.com/phygital/mail_phygital.php', {
            method: 'POST',
            body: formData,
        })
        .then(async response => {
            try {
                const retorno = await response.text()
            } catch (error) {
                alert(error)
                return false
            }
        })
    }
</script>

<div class="carousel-item w-screen h-screen flex flex-col justify-center items-center">
    <form class="bg-neutral-900 rounded-[10px] pt-[1vw] pb-[1.5vw] px-[3vw] flex flex-col items-center space-y-6" action="">
        <div class="bg-white text-black font-sans flex flex-col py-[1vw] px-[2vw]" id="pdf-body">
            <img src={image} alt="" class="w-[28vw]">
            <div class="flex items-center w-[28vw]">
                <div class="flex-1 w-[23vw] mt-4">
                    <h2 class="font-medium text-xl overflow-clip block whitespace-nowrap h-8 text-black">{track.name}</h2>
                    <h3 class="text-base overflow-clip block whitespace-nowrap h-8 text-black">{track.album?.name}</h3>
                </div>
                <svg viewBox="0 0 24 24" width="2vw" height="2vw"><path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" fill="#000"></path></svg>
            </div>
            <div class="h-4"></div>
            <div class="flex items-center">
                <div class="rounded-full aspect-square w-[0.833vw] bg-black"></div>
                <div class="w-full border-black border-[0.1vw]"></div>
            </div>
            <div class="flex">
                <span class="text-base font-medium text-black">0:00</span>
                <div class="flex-1"></div>
                <span class="text-base font-medium text-black">{getDurationString(track.duration)}</span>
            </div>
            <div class="flex w-full">
                <div class="flex-1"></div>
                <div class="flex flex-1 justify-between items-center"><svg viewBox="0 0 24 24" width="2vw" height="2vw"><path d="M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z" fill="#000"></path></svg> <svg viewBox="0 0 24 24" width="3.125vw" height="3.125vw"><path d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" fill="#000"></path></svg> <svg viewBox="0 0 24 24" width="2vw" height="2vw"><path d="M16,18H18V6H16M6,18L14.5,12L6,6V18Z" fill="#000"></path></svg></div>
                <div class="flex-1"></div>
            </div>
            <div class="h-6"></div>
            <img class="self-center w-[12.833vw] border border-black" src={`https://scannables.scdn.co/uri/plain/png/ffffff/black/1000/${track.uri}`} alt="">
        </div>
        <button on:click={printFrame} class="font-medium text-4xl text-white font-['Gotham'] bg-green-500 rounded-[10px] py-[1em] px-[2em]">Imprimir</button>
        <button style="display: none !important" id="next-finish" on:click></button>
    </form>
</div>