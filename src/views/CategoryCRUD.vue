<script setup>
import { ref } from 'vue';
    const BASE_URL = import.meta.env.VITE_APIURL
    const API_URL = `${BASE_URL}/category/`
    // const API_URL = 'http://127.0.0.1:8000/api/category/'

    const categories = ref([])
    const category = ref({
        categoryid:0,
        categoryname:""
    })

    const btnText = ref("新增")

    // 串接API - 透過 GET 讀取資料
    const loadCategories = async () =>{
        const response = await fetch(API_URL)
        const datas = await response.json()
        // console.log(datas)
        categories.value = datas
        // console.log(categories.value)
    }

    // 串接API - 透過 POST 新增
    const addCategory = async() =>{
// 有可能做新增
// 有可能做修改
        if(category.value.categoryid > 0){
            // console.log("修改")
            updateCategory()
        }else{
            // console.log("新增")
            // console.log(category.value)
        const response = await fetch(API_URL,{
            method: "POST",
            body: JSON.stringify(category.value),
            headers: {"Content-Type":"application/json"}
        })
        if(response.ok){
            clearCategory()
            loadCategories()
        }else{
            alert("新增失敗")
        }
        }
    }

    // 串接API - 透過 delete 刪除資料
    const removeCategory = async(item) =>{
        if(window.confirm("確定要刪除??")){
            const response = await fetch(`${API_URL}${item.categoryid}/`,{
                method:"DELETE"
            })
            if(response.ok){
                loadCategories()
            // const datas = await response.json()
            // console.log(datas)
            }
        }
        // console.log(item)
    }

    // 串接API - 資料修改
    const updateCategory = async() =>{
        // console.log(item)
        const response = await fetch(`${API_URL}${category.value.categoryid}/`,{
            method:"PUT",
            body:JSON.stringify(category.value),
            headers: {"Content-Type":"application/json"}
        })
        if(response.ok){
            clearCategory()
            loadCategories()
        }
    }

    const editCategory = (item) =>{
        // console.log(item)
        category.value = item
        btnText.value = "修改"
    }

    // 清除 新增欄位資料
    const clearCategory = () =>{
        btnText.value="新增"
        category.value = {
            categoryid:0,
            categoryname:""
        }
    }
    loadCategories()
     
</script>

<template>
    <div>
        <h2>分類資料管理</h2>
        <div class="row">
    <div class="col-4">
        <ul class="list-group">
  <li v-for="category in categories" :key="category.categoryid" class="list-group-item d-flex justify-content-between align-items-center">
   {{ category.categoryname }}
   <div>
    <span @click="editCategory(category)" class="badge text-bg-primary rounded-pill m-1"><i class="bi bi-pencil-square"></i></span>
    <span @click="removeCategory(category)" class="badge text-bg-danger rounded-pill m-1"><i class="bi bi-trash-fill"></i></span>
   </div>
  </li>
 
  
</ul>
    </div>
    <div class="col-4">
        <div class="input-group mb-3">
        <input type="text" v-model="category.categoryname" class="form-control" placeholder="請輸入景點分類">
        <button @click="addCategory" class="btn btn-outline-secondary" type="button" id="button-addon2">{{ btnText }}</button>
        </div>
    </div>
    <div class="col-4"></div>
 </div>
    </div>
</template>