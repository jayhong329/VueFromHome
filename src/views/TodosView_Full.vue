<script setup>
import { computed, ref } from 'vue';

const newTodo = ref("")
const todos = ref(
    [
        { "id": "m21uwqfprb0ncx4", "title": "學習vue", "completed": true },
        { "id": "m21w6x73hw2tvrc", "title": "機器學習", "completed": false },
        { "id": "m21w6x73hw2abcd", "title": "深度學習", "completed": false },
    ]
)

//取得唯一值
const uniqueId = () => Date.now().toString(36) + Math.random().toString(36).substring(2, 9);

// 新增待做事項
const enterHandler = () =>{
    todos.value.push({ "id": uniqueId(), "title": newTodo.value, "completed": false })
    newTodo.value=""
    // console.log(newTodo.value)
}

// 清除輸入的資料
const deleteHandler = () =>{
    newTodo.value=""
}

// 刪除todo  splice() --移除或新增陣列中的資料  indexOf() --判斷陣列中是否包含某個值
const removeTodo = todo =>{
    // 找到傳入的todo 在 todos中的索引值
    const idx= todos.value.indexOf(todo)
    // console.log(idx)

    // 刪除  從idx這位置 刪除1筆資料
    todos.value. splice(idx, 1)
}

// 計算還有幾個工作未完成  filter() 把篩選後的結果放到新的陣列內
const remaining = computed(() =>{
    const activeTodos = todos.value.filter(todo => !todo.completed)
    // console.log(activeTodos)
    return activeTodos.length

})

// 移除所有完成的工作
const removeCompleted = () =>{
    for (let i = todos.value.length-1; i>=0; i--){
        if(todos.value[i].completed){
            todos.value.splice(i,1)
        }
    }

}

</script>
<template>
    <div class="row">
        <div class="col-3"> </div>
        <div class="col-6">
            <h3>Todos Page</h3>
            <input v-model="newTodo" @keyup.enter="enterHandler" @keyup.delete="deleteHandler" type="text" class="form-control" autofocus autocomplete="off" placeholder="想要做甚麼?">
            <ul class="list-group mt-3">
                <li  v-for="todo in todos" :key="todo.id" class="list-group-item">
                    <div class="d-flex justify-content-between">
                        <div>
                            <input v-model="todo.completed" class="form-check-input me-3" type="checkbox">
                            <label class="form-check-label" :class="{completed:todo.completed}">{{ todo.title }}</label>
                        </div>
                        <button @click="removeTodo(todo)" class="badge bg-danger rounded-pill border-0">X</button>
                    </div>
                </li>
            </ul>
            <div class="mt-3 d-flex justify-content-between">
                <strong class=" me-3">尚有 {{ remaining }} 個工作未完成</strong>
                <button class="btn btn-warning me-3" @click="removeCompleted">清除完成工作</button>
            </div>
        </div>
        <div class="col-3"></div>
    </div>
</template>
<style lang="css" scoped>
.completed {
    color: #949494;
    text-decoration: line-through;
}
</style>