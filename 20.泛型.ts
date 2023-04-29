// **需求：创建一个 函数，传入什么数据就返回该数据本身**
// 作用：理解为是一个函数，将类型当做参数传递
const id = <T>(value: T) => {
  return value
}

// 省略写法
const str1 = id('a')

// const id = <T>(value: T): T => {
//   return value
// }
// 完整写法
const num = id<number>(10)
const str = id<string>('a')
