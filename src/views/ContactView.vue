<script setup>
import ChildComponent from '@/components/ChildComponent.vue';
import { useCounterStore } from '@/stores/counter';
import { ref } from 'vue';

    const storeCounter = useCounterStore()

    const abcd = ref("XZY")
    const parentData = ref("")

    // data 會收到子組件傳過來的值
    const myHandler = data =>{
        alert(data)
        parentData.value = data
    }
</script>

<template>
    <div>
        <h2>Contact Page{{ parentData }}</h2>
        <!-- 
        message title 是自訂的屬性名稱  用來傳遞資料到子組件
        myEvent 是自訂的事件名稱   目前不知道何時會觸發此事件 -->
        <ChildComponent message="Hello WORLD!!!" :title="abcd" @myEvent="myHandler"></ChildComponent>
        <hr>
        <h2>資料來自 pinia store</h2>
        <input type="number" v-model="storeCounter.count">
        <span>{{ storeCounter.count }}</span>
        <span>{{ storeCounter.doubleCount }}</span>
        <button @click="storeCounter.add">add</button>
    </div>
</template>

<style lang="css" scoped>

</style>