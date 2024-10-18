<script setup>
import { ref, nextTick } from 'vue';

    const data = "abc"
    const count = ref(0)
    const add = async () => {
       count.value++
       await nextTick()
       const btn = document.querySelector('button')
    console.log(btn.textContent)
    }
</script>

<template>
    <div>
        <button @click="add">{{ count }}</button>
    </div>
</template>

<style lang="css" scoped>

</style>