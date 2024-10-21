<script setup >
import { ref, onBeforeMount, onMounted } from 'vue'

onBeforeMount(()=>{
    console.log('onBeforeMount')
})
// 組件已經載入到真實的 DOM 上
onMounted(()=>{
    console.log('onMounted')
    const myH = document.querySelector('#theH')
    console.log(myH.textContent)
})


const show = ref(true)
</script>


<template>
    <button @click="show =!show">Toggle</button>
    <Transition>
        <h2 id="theH" v-if="show">My First Component</h2>
    </Transition>

</template>

<style scoped>
h2{
    color: rgb(27, 156, 96);
}
.v-enter-active,
.v-leave-active{
    transition: all 2s;
}
.v-enter-from,
.v-leave-to{
    opacity: 0;
    transform: translateX(50px);
}
</style>

