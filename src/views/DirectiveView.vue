<script setup>
import { ref } from 'vue';
    const message = ref("Hello Vue!!")
    const iSpan = ref('<a href="https;//www.iSpan.com.tw">iSpan</a>')
    const isLoading = ref(true)
    const isLoggedIn = ref(true)

    const regions = ref([
        {"code": "100","name": "中正區"},
        {"code": "103","name": "大同區"},
        {"code": "104","name": "中山區"},
        {"code": "106","name": "大安區"}
    ])

    const selectedOpiton = ref("100")

    const user = ref({"name":"Jay", "age":30, "email":"Jay30@gmail.com"})

    const bgColor = ref("yello")
    const radius = ref("25px")
    
</script>

<template>
    <div>
        <h2>Directive Demo</h2>
        <!-- v-text (讀取文字) -->
        <p>{{ message }}</p>
        <p v-text="message"></p>

        <!-- v- html (讀取網頁) -->
        <div v-text="iSpan"></div>
        <div v-html="iSpan"></div>

        <!-- v-show  (條件判斷) -->
        <img src="/121890263.png" alt="loading...." v-show="isLoading">

        <!--   v-if   (條件判斷) -->
        <div v-if="isLoggedIn">
            <p>isLoggedIn 為 TRUE</p>
            <button @click="isLoggedIn=! isLoggedIn">登出</button>
        </div>
        <div v-else>
            <p>isLoggedIn 為 false</p>
            <button @click="isLoggedIn=! isLoggedIn">登入</button>
        </div>
        <hr>
        <!-- v-for   (1.讀取陣列)  region =  {"code": "100","name": "中正區"}  -->
        <select v-model="selectedOpiton">
            <option v-for="(region,index) in regions" :value="region.code" :key="region.code" >{{ index }}{{ region.name }}</option>
        </select>
        <span>{{ selectedOpiton }}</span>
        
        <!-- v-for (2.讀取物件)  -->
         <ul>
         <!-- {key: value} -->
            <li v-for="(value, key) in user">{{ key }}: {{ value }}</li>
         </ul>

         <!-- v-for (3.產生數字範圍)  -->
        <ul class="pagination pagination-lg">
            <li class="page-item" v-for="i in 8"><a class="page-link" href="#">{{ i }}</a></li>
        </ul>
        <hr>
        <input type="color" v-model="bgColor">
        <div style="height: 200px;width: 200px;border: 1px solid grey;"
        :style="{backgroundColor: bgColor, 'border-radius':radius}"
        ></div>

        <div style="height: 100px;width: 100px" 
        :class="{active:true, 'text-danger':true}"></div>

    </div>
</template>

<style lang="css" scoped>
.active{
    border: 1px solid rgb(127, 47, 255);;
}
.text-danger{
    background-color: pink;
}

</style>