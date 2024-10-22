<script setup>
import { useTodoStore } from '@/stores/todo';
    const todoStore = useTodoStore()
    const props =defineProps({
        total:Number
    })

    const emit = defineEmits(["removeCompleted"])

    const clickHandler = ()=>{
        // 觸發父組件的自訂事件
        emit("removeCompleted")
    }
</script>

<template>
    <div class="mt-3 d-flex justify-content-between">
        <!-- 從pinia中取得未完成的工作數量 -->
        <strong class=" me-3">尚有 {{ todoStore.qty }} 個工作未完成</strong>
        <button class="btn btn-warning me-3" @click="clickHandler">清除完成工作</button>
    </div>
</template>

<style lang="css" scoped>

</style>