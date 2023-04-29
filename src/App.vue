<script setup lang="ts">
import { ref } from 'vue'
import Son from './components/Son.vue'
const money = ref(1000)
const car = ref('宝马')
</script>

<template>
  <div>
    {{ money }} -- {{ car }}
    <Son :money="money"></Son>
  </div>
</template>
