import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCounterStore = defineStore("counter", ()=>{
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    const add = () => count.value++

    return{count, doubleCount, add}
})