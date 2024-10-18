<script setup>
import { ref } from 'vue'
const message = ref('Composition API')
</script>

<template>
    <h2>這是 Second Component</h2>
    <input type="text" v-model="message">
    <p>{{ message }}</p>
</template>

<style scoped>
h2{
    color: rgb(36, 60, 192);
}
</style>