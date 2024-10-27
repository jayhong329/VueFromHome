<script setup>
import PagingComponent from '@/components/pagingComponent.vue';
import { ref, watchEffect } from 'vue';

    // 串接API Ajax
    // fetch("http://127.0.0.1:8000/api/spots/")
    //     .then (response => response.json())
    //     .then (datas => console.log(datas))

    // 資料的搜尋.分頁.排序
    const ITEM = ref({
        "categoryid":4,
        "search":"",
        "ordering":"-spotid",
        "page":2,
        "page_size":9
        })
    const SPOTS = ref([])  //接收API回傳的結果
    const BASE_URL = import.meta.env.VITE_APIURL
    const API_URL = `${BASE_URL}/spots/`

    // 只要 ref() 響應式資料"改變" watchEffect就會被執行!! 
    // 呼叫API 放在 watchEffect 裡面
    watchEffect(async()=>{
        const params = new URLSearchParams({
            "categoryid":ITEM.value.categoryid,
            "search":ITEM.value.search,
            "ordering":ITEM.value.ordering,
            "page":ITEM.value.page,
            "page_size":ITEM.value.page_size,
        })
        // console.log(params.toString())
        const URL_PARAMS = `${API_URL}?${params.toString()}`

        const response = await fetch(URL_PARAMS)
        const datas = await response.json()
        // console.log(datas)
        SPOTS.value = datas
        // console.log(SPOTS.value)
    })
    // ?categoryid=3&search=&ordering=-spotid&page=2&page_size=9

    // page 會由子組件傳過來
    // 分頁功能
    const pagingHandlder = page=>{
        ITEM.value.page = page
    }

</script>

<template>
    <PagingComponent :totalPages="SPOTS.total_page" @goPaging="pagingHandlder"></PagingComponent>
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <div v-for="{spotid, spottitle, spotdescription, spotimage, address} in SPOTS.results" :key="spotid" class="col">
            <div class="card h-100">
            <img :src="spotimage" class="card-img-top" :alt="spottitle">
            <div class="card-body">
                <h5 class="card-title">{{ spotid }} {{ spottitle }}</h5>
                <p class="card-text">{{ spotdescription.length <=100 ? spotdescription : spotdescription.substring(0,100) }}...</p>
            </div>
            <div class="card-footer">
                <small class="text-body-secondary">{{ address }}</small>
            </div>
            </div>
        </div>
  </div>
</template>

<style lang="css" scoped>

</style>