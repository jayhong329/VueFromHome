<script setup>
import { ref, computed } from "vue";
    const celsius = ref(0)
    const TempatureConvert = () =>{
        console.log("TempatureConvert")
        return celsius.value * 9 / 5 + 32
    }
    const fahrenheit = computed(() =>{
        console.log("computed")
        return celsius.value * 9 / 5 + 32
    })



</script>

<template>
    <div>
        <h2>Computed Demo</h2>
        <div>攝氏: <input type="text" v-model.lazy="celsius"></div>
        <div>華氏: {{ celsius * 9 / 5 + 32 }}</div>
        <div>華氏(呼叫function): {{ TempatureConvert() }}{{ TempatureConvert() }}{{ TempatureConvert() }}</div>
        <div>華氏(使用Computed): {{ fahrenheit }}{{ fahrenheit }}{{ fahrenheit }}</div>
    </div>
    
</template>

<style lang="css" scoped>

</style>