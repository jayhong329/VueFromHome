<script setup>
    
</script>

<template>
    <div>
        <h2>About Page</h2>
        <RouterLink :to = "{ name: 'Team1'}" activeClass="active">Team1</RouterLink>
        <RouterLink :to = "{ name: 'Team2'}" activeClass="active">Team2</RouterLink>
    </div>
    <hr>
    <RouterView></RouterView>
</template>

<style lang="css" scoped>
.active {
    background-color: yellow;
}
</style>