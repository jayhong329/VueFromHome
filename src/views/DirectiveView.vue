<script setup>
import { ref } from 'vue';
    const message = ref("Hello Vue!!")
    const iSpan = ref('<a href="https;//www.iSpan.com.tw">iSpan</a>')
    const isLoading = ref(false)
    const isLoggedIn = ref(true)

    const regions = ref([
        {"code": "100","name": "中正區"},
        {"code": "103","name": "大同區"},
        {"code": "104","name": "中山區"},
        {"code": "106","name": "大安區"}
    ]
    )
    
</script>

<template>
    <div>
        <h2>Directive Demo</h2>
        <p>{{ message }}</p>
        <p v-text="message"></p>
        <p v-text="iSpan"></p>
        <div v-html="iSpan"></div>
        <img src="#" alt="loading....">
        <div v-if="isLoggedIn">
            <p>isLoggedIn 為 TRUE</p>
            <button @click="isLoggedIn=! isLoggedIn">登出</button>
        </div>
        <div v-else>
            <p>isLoggedIn 為 false</p>
            <button @click="isLoggedIn=! isLoggedIn">登入</button>
        </div>
        <select name="" id="">
            <option v-for="(region,index) in regions" :value="region.code" :key="region.code" >{{ region.name }}</option>
        </select>
    </div>
</template>

<style lang="css" scoped>

</style>