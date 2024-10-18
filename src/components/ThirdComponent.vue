<script setup>
import { ref } from "vue";
    const isLogin = ref(false);
    const getName = () => "Tom"

    const i = ref(0);
    const week = ["日", "一", "二", "三", "四", "五", "六"]
    const author = ref({    
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})
    const id = ref(10);
    const homeUrl = ref("https://www.google.com.tw");
    const isDisabled = ref(true); 

    const message = ref("Hello V-model")
    const num1 = ref(0)
    const num2 = ref(0)
    const sum = ref(0)
    const samHandler = () =>{
        sum.value = num1.value + num2.value
    }


</script>

<template>
    <div>
        <h2>這是第三個組件  {{ getName() }}</h2>
        <p>{{ isLogin ? 'yes' : 'no' }}</p>
        <br />
        <!-- 錯誤用法<p>{{ if(true) { return "Hello"} }}</p> -->
        <p>{{ new Date().toLocaleDateString() }}</p>
        <!-- 錯誤用法<p>{{ let name = "Jack" }}</p> -->
        <!-- 錯誤用法<p>{{ i += 1 }}</p> -->
        <p>{{ i+1 }}</p>
        <hr />
        <div>星期{{ week[new Date().getDay()] }}</div>
        <div>星期{{ week[4] }}</div>
        <div>出版了書籍：{{ author.books.length > 0 ? "是" : "否" }}</div>
        <hr />
        <!-- 屬性繫節 Attribute Binding  -->
        <p v-bind:data-id = "id" >ID: {{ id }}</p>
        <p :data-id = "id" >ID: {{ id }}</p>
        <a :href = "homeUrl" >GOOGLE</a>
        <hr />
        <!-- public 資料夾中檔案的讀取，不用加上public資料夾 -->
        <img src="/003.png" alt="">
        <img src="/src/assets/018.png" alt="">
        <br>
        <button :disabled = "isDisabled" >click</button>
        <hr />
        <!-- 事件繫節 Event Binding EX: @click @change -->
        <!-- 雙向繫節 Two-Way Binding EX: v-model 使用在表單元素中(input、select、textarea) -->  
        <!-- 預設是 input事件 -->
        <input type="text" v-model="message">{{ message }}
        <br />
        <!-- 加上 .trim ，會刪除左右邊的空白 -->
        <input type="text" v-model.lazy="message">{{ message.length }}
        <br />
        <!-- 加上 .lazy ，改成用 change事件 -->
        <input type="text" v-model.lazy="message">{{ message }}
        <br />
        <!-- 加上 .number ，把輸入數值字串改成"數值型態" -->
        <input type="text" v-model.number="num1"> + 
        <input type="text" v-model.number="num2" @blur="samHandler"> = 
        {{ sum }}



    </div>
</template>

<style lang="css" scoped>

</style>