<script setup>
    import { useTodoStore } from '@/stores/todo';
    const todoStore = useTodoStore()
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="https://www.ispan.com.tw/img/Logoslogan_sm.png" style="height: 50px;" alt="logo" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink :to="{ name: 'Home' }" class="nav-link" activeClass="active">首頁</RouterLink>
          </li>
        <li class="nav-item">
            <RouterLink :to="{ name: 'About' }" class="nav-link" activeClass="active">關於我們</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink :to="{ name: 'Contact' }" class="nav-link" activeClass="active">聯絡我們</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink :to="{ name: 'Directive' }" class="nav-link"  activeClass="active">DirectiveDemo</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink :to="{ name: 'Todos' }" class="nav-link"  activeClass="active">待做事項</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink :to="{ name: 'Categories' }" class="nav-link"  activeClass="active">分類管理</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink :to="{ name: 'Spots' }" class="nav-link"  activeClass="active">景點資料</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink :to="{ name: 'Tabs' }" class="nav-link"  activeClass="active">Tabs</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink :to="{ name: 'Member', params:{id:'20'} }" class="nav-link"  activeClass="active">會員中心20</RouterLink>
        </li>
      </ul>
    </div>
  </div>
  <div class="d-lg-flex col-lg-3 justify-content-lg-end">
        <RouterLink to="/todos" class="mx-2 btn btn-primary position-relative">
          <i class="bi bi-stickies"></i>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <!-- 從pinia 取得未完成的工作數量 -->
            {{ todoStore.qty }}
            <span class="visually-hidden">unread messages</span>
          </span>
        </RouterLink>
        <button class="mx-2 btn btn-primary"><i class="bi bi-cart4"></i></button>
        <RouterLink class="mx-2 btn btn-primary" to="/login">
          <i class="bi bi-box-arrow-in-right"></i>
        </RouterLink>
      </div>

</nav>
</template>

<style lang="css" scoped>

</style>