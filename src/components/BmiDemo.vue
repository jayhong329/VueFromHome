<script setup>
    import { ref, computed } from "vue";

    const height = ref(0)
    const weight = ref(0)
    const Bmi = computed(() =>{
        if (weight.value > 0 && height.value> 0 ) {
            const bmi = weight.value / Math.pow(height.value /100,2)
            return bmi.toFixed(2)
        } else {
            return 0
        }
    })
</script>

<template>
    <div>
        <h2>Computed BMI 計算</h2>
        <p>身高(公分): <input type="text" v-model.lazy="height"></p>
        <p>體重(公斤): <input type="text" v-model.lazy="weight"></p>
        <p>BMI: {{ Bmi }}</p>
    </div>
</template>

<style lang="css" scoped>

</style>