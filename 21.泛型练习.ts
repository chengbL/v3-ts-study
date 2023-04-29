// 1. 需求： 封装一个函数，传入一个参数，包装成数组返回（可能是 number/string/boolean 等）
// 	fn(20)  =>  [20]
// 	fn(true)  =>  [true]
// const fn = <T>(val: T) => {
//   return val
// }
const fn = function <T> (val: T) {
  return val
}
fn<number>(20)
console.log(fn(true))

// 2. 需求： 封装一个函数，传入数组, 交换数组两项的位置（可能是 number/string/boolean 等）
// 	fn([true,20])  =>  [20,true]

const fn2 = <T, K>(arr: [T, K]) => {
  return [arr[1], arr[0]]
}

console.log(fn2<boolean, number>([true, 2]))
console.log(fn2([10, false]))
