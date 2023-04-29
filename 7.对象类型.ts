// 空对象
// let person: {} = {}

// 有属性的对象
// let person: { name: string } = {
//   name: '同学'
// }

// 既有属性又有方法的对象
// 在一行代码中指定对象的多个属性类型时，使用 `;`（分号）来分隔
// let person: { name: string; sayHi(): void } = {
//   name: 'jack',
//   sayHi () {}
// }

// 对象中如果有多个类型，可以换行写：
// 通过换行来分隔多个属性类型，可以去掉 `;`
let person: {
  name: string
  //   只需要描述清楚是函数即可，无论怎么定义的都可以，建议使用箭头函数
  //   sayHi(): void;
  //   sayHello(): void;
  sayHi: () => void
  sayHello: () => void
  add: (a: number, b: number) => number
} = {
  name: 'jack',
  sayHello () {},
  sayHi: () => {},
  add: (a, b) => {
    return a + b
  }
}
