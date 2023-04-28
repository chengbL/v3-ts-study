// 在函数声明中无法使用即function name(){}  ==> error,类型别名只能用于函数表达式
type FnType = (a: number, b: string) => string

// function add (a: number, b: string): string {
//   return a + b
// }
const add: FnType = (a, b) => {
  return a + b
}
// console.log(add(1, '23'))
// 1.入参类型
// add('m',2)

// 2.入参数量不对

// void  代表函数没有返回值
function sayHi (name: string): void {
  console.log('name:', name)
}
sayHi('cheng')
