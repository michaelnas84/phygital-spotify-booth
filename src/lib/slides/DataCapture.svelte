<script lang='ts'>
	import { createEventDispatcher, onMount } from "svelte";
    import Input from "$lib/components/Input.svelte";
    import vmask from 'vanilla-masker'
	import DateInput from "$lib/components/DateInput.svelte";

    const dispatch = createEventDispatcher()

    let nome : string
    let email : string
    let telefone : string
    let data_nascimento : string

    let validated = false

    const nulls = [undefined, '']

    $: {
        const val = [nome, email, telefone, data_nascimento].filter(element => nulls.includes(element))
        validated = val.length == 0 && validateEmail(email) && validatePhone(telefone) && validateDate(data_nascimento)
    }

    var telMask = ['(99) 9999-99999', '(99) 9 9999-9999']

    function onSubmit() {
        dispatch('submit', {
            nome : nome,
            email : email,
            telefone : telefone,
            data_nascimento : data_nascimento
        })
    }

    function validateEmail(email : string) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return re.test(email.toLowerCase())
    }

    function validatePhone(raw_phone : string) {
        const phone = raw_phone.replace(/\D/g, '')
        if (phone.length === 11 && /^([1-9]{2})?9[0-9]{8}$/.test(phone)) {
            return true
        } else if (phone.length === 10 && /^([1-9]{2})?[2-5][0-9]{7}$/.test(phone)) {
            return true
        } else {
            return false
        }
    }

    function onPhoneInput(event : any) {
        var c = event.target
        var v = c.value.replace(/\D/g, '')
        var m = c.value.length > 14 ? 1 : 0
        c.value = vmask.toPattern(v, telMask[m])
    }

    function validateDate(raw_date : string) {
        const date = raw_date.split('-').reverse()
        var day = parseInt(date[0]);
        var month = parseInt(date[1]);
        var year = parseInt(date[2]);
        if (day > 31 || month > 12 || year < 1900 || year > new Date().getFullYear()) {
            return false
        }
        return true
    }

</script>

<div class="carousel-item w-screen h-screen flex justify-center items-center box-border">
    <form class="bg-neutral-900 rounded-[10px] w-[76vw] p-[2.7vw] space-y-[3.125vw] flex flex-col items-center" on:submit={onSubmit}>
        <h1 class="font-['Gotham'] font-bold text-4xl">Informe seus dados</h1>
        <div class="flex w-full">
            <div class="flex-1"></div>
            <div class="flex-1 flex flex-col space-y-[1.666vw] items-center">
                <Input bind:value={nome} placeholder="Nome"/>
                <Input bind:value={email} placeholder="Email"/>
                <Input on:input={onPhoneInput} bind:value={telefone} placeholder="Telefone"/>
                <DateInput bind:value={data_nascimento} placeholder="Data de Nascimento"/>
                {#if validated}
                <button class={`font-medium text-2xl text-white font-['Gotham']rounded-[10px] py-4 w-full transition-colors bg-green-500`}>Confirmar</button>
                {:else}
                <button disabled class={`font-medium text-2xl text-white font-['Gotham']rounded-[10px] py-4 w-full transition-colors bg-zinc-700`}>Confirmar</button>
                {/if}
            </div>
            <div class="flex-1"></div>
        </div>
    </form>
</div>