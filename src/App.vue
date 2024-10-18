<script setup>
import { ref, watch, watchEffect } from "vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import FirstComponent from './components/FirstComponent.vue';
// import SecondComponent from './components/SecondComponent.vue';
// import ButtonCount from './components/ButtonCount.vue';
// import ThirdComponent from './components/ThirdComponent.vue';
// import ComputedDemo from './components/ComputedDemo.vue';
// import BmiDemo from "./components/BmiDemo.vue";
// import MemberView from "./views/MemberView.vue";
import NavbarComponent from "./components/NavbarComponent.vue";


const formatTime = today =>{
    const hours = String(today.getHours()).padStart(2, '0')  //03.14
    const minutes = String(today.getMinutes()).padStart(2, '0')  
    const seconds = String(today.getSeconds()).padStart(2, '0')
    return `${hours}:${minutes}:${seconds}`
}

const today = new Date()
const clock = ref(formatTime(today))
const clock1 = ref({
    day: today.getDay(),
    theTime: formatTime(today)
})
// console.log(clock.value)

// watch(clock, (newTime , oldTime) =>{
//     console.log('new' , newTime)
//     console.log('old' , oldTime)
// },{ immediate:true, once:true })
// immediate:true 表示組件載入就要執行 watch

// watch(clock1, (newTime , oldTime) =>{
//     console.log('new' , newTime)
//     console.log('old' , oldTime)
// },{ deep:true})

watchEffect(() =>{
    console.log('effect1' , clock.value)
    console.log('effect2' , clock1.value.theTime)
})

// 每隔一秒鐘 讀取現在的時間
// setInterval(() =>{
//     // clock.value = formatTime(new Date())
//     clock1.value.theTime = formatTime(new Date())
// }, 1000);
</script>

<template>
    <div class="container">
        <NavbarComponent></NavbarComponent> 

        <!-- <h2>Welcome to Vue：{{ clock }} || {{ clock1.theTime }}</h2> -->
        <hr>
        <!-- <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ButtonCount></ButtonCount>
        <hr>
        <ThirdComponent></ThirdComponent>
        <hr> -->
        <!-- <ComputedDemo></ComputedDemo> -->
        <!-- <BmiDemo></BmiDemo> -->

        <!-- <router-link to="/" activeClass="active">首頁</router-link> |
         <router-link to="/about" activeClass="active">關於我們</router-link> |
         <router-link to="/Contact" activeClass="active">聯絡我們</router-link> |
         <router-link to="/member/12" activeClass="active">會員中心12</router-link> | -->
        <hr />
        <!-- <router-link :to="{ name: 'Home'}" activeClass="active">首頁</router-link> |
         <router-link :to="{ name: 'About'}" activeClass="active">關於我們</router-link> |
         <router-link :to="{ name: 'Contact'}" activeClass="active">聯絡我們</router-link> |
         <router-link :to="{ name: 'Member', params:{id:'20'}}" activeClass="active">會員中心20</router-link> | -->
        <hr />
        <RouterView></RouterView>


    </div>
 


</template>

<style scoped>
.active {
    background-color: lightblue;
}

</style>

