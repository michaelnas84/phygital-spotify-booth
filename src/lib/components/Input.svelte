<script lang='ts'>
    export let value : any
    export let placeholder : string | undefined
</script>

<input
    bind:value
    on:input
    class="w-full bg-neutral-800 rounded-[10px] p-[1em] font-light font-['Gotham'] border-[3px] text-2xl text-center"
    placeholder={placeholder}
>