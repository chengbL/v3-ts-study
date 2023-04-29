<script setup lang="ts">
import { ref } from 'vue'
import Son from './components/Son.vue'
const money = ref(1000)
const car = ref('宝马')

const padd = (num: number) => {
  money.value = money.value + num
}

const changePcar = (str: string) => {
  car.value = str
}
</script>

<template>
  <div>
    {{ money }} --- {{ car }}
    <Son :money="money" :car="car" @add="padd" @change-car="changePcar"></Son>
  </div>
</template>

<style scoped></style>
