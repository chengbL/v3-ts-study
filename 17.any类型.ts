// - **原则:不推荐使用 any**!这会让 TypeScript 变为 “AnyScript”(失去 TS 类型保护的优势)
// - 因为当值的类型为 any 时，可以对该值进行任意操作，并且不会有代码提示
let obj: any = { x: 0 }

obj.bar = 100
obj()
const n: number = obj
