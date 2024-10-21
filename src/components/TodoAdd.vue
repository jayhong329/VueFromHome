<script setup>
import { ref } from 'vue';
    const newTodo = ref("")

    // 宣告父組件傳入事件名稱
    const emit = defineEmits(["addTodo"])

    const deleteHandler = () =>{
        newTodo.value=""
    }

    const enterHandler = () =>{
        console.log(newTodo.value)
        //新增工作項目傳給父組件
        //觸發父組件的事件
        emit("addTodo",newTodo.value )
        newTodo.value=""
    }
</script>

<template>
    <div>
        <input v-model="newTodo" @keyup.enter="enterHandler" @keyup.delete="deleteHandler" type="text" class="form-control" autofocus autocomplete="off" placeholder="想要做甚麼?">
    </div>
</template>

<style lang="css" scoped>

</style>