// - 枚举的功能类似于**字面量类型+联合类型组合**的功能，也可以表示一组明确的可选值
// - 作用：提高代码的可阅读性
// - 枚举：定义一组命名常量。它描述一个值，该值可以是这些命名常量中的一个

// 1. 使用 `enum` 关键字定义枚举
// 2. 约定枚举名称以大写字母开头
// 3. 枚举中的多个值之间通过 `,`（逗号）分隔
// 4. 定义好枚举后，直接使用枚举名称作为类型注解

enum State {
  success = 2,
  modefied,
  failed
}

const request = {
  id: 1,
  usd: 'cbn',
  state: State.modefied
}

console.log(request)

// 枚举中无初始值那么会有默认值
// 第一项的默认值是0
// 第二项开始，会根据上一项的值+1
