<script lang='ts'>
    export let value : any
    export let placeholder : string | undefined
    let input : HTMLInputElement
</script>

<input
    bind:value
    on:input
    bind:this={input}
    on:focus={() => input.type='date'} on:blur={() => {if(input.value==''){input.type='text'}}}
    class="w-full bg-neutral-800 rounded-[10px] p-[1em] font-light font-['Gotham'] border-[3px] text-2xl text-center"
    placeholder={placeholder}
>