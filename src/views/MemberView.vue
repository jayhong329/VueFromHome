<script setup>
import { watchEffect } from 'vue';
import { useRoute } from 'vue-router';

    defineProps({
        id: String
    })
    // 取得路由參數的值
    const route = useRoute()
    watchEffect(() =>{
        console.log("id", route.params.id)
    })
</script>

<template>
    <div>
        <h2>會員中心</h2>
        <!-- 在 template 取得路由參數的值 -->
        <!-- 第一種寫法 $route.params.[參數名稱] -->
        <h4>會員編號 {{ $route.params.id }} 的資料</h4>
        <!--第二種寫法-->
        <!--
        1. 路由設定檔中加上 props:true
        2. 在script，透過defineProps 宣告參數
        3. 在 tempate 中 {{ id }}
        -->
        <h4>會員編號{{ id }}</h4>
    </div>
</template>

<style lang="css" scoped>

</style>