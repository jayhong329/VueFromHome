<script setup >
import { onBeforeMount, onMounted } from 'vue'

onBeforeMount(()=>{
    console.log('onBeforeMount')
})
// 組件已經載入到真實的 DOM 上
onMounted(()=>{
    console.log('onMounted')
    const myH = document.querySelector('#theH')
    console.log(myH.textContent)
})
</script>


<template>
    <h2 id="theH">My First Component</h2>
</template>

<style scoped>
h2{
    color: rgb(27, 156, 96);
}
</style>

