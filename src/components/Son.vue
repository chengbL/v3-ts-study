<script setup lang="ts">
// defineProps({
//   money: {
//     type: Number,
//     default: 5000
//   },
//   car: {
//     type: String,
//     default: '迈凯伦'
//   }
// })

/*
TS 的写法
  1. 调用 defineProps ，把泛型参数(描述父组件的props的类型) 传递，返回数据
  2. 解构返回来的数据，并且加上默认值
    注意：要使用这个功能，要在 vite.config.ts 里面开启
    vue({
        reactivityTransform: true,
    })
    并且开启后，需要重启服务
    开启后，vscode黄色的警告不用管，是提醒你注意版本号的
*/

// ts泛型写法  可以利用解构赋值去赋予默认值
const { money = 1000, car = '迈凯伦' } = defineProps<{
  money: number
  car?: string // 非必传
}>()

const emit = defineEmits<{
  (event: 'add', num: number): void
  (event: 'changeCar', str: string): void
}>()
</script>
<template>
  <div>
    <div>{{ money }} --- {{ car }}</div>
    <button style="margin-top: 20px" @click="emit('add', 1000)">
      点我改变money
    </button>
    <button @click="emit('changeCar', '玛莎拉蒂mc20')">点我改变car</button>
  </div>
</template>
