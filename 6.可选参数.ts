/**
 * 注意：**可选参数只能出现在参数列表的最后**，也就是说可选参数后面不能再出现必选参数
 * @param fir 必传
 * @param sec 可选 演示默认值 可选参数和默认值不能写在一起
 * @param th 可选
 */
const myGril = (fir: number, sec: string = 'cb', th?: boolean): void => {
  console.log('fir-sec-th', fir, sec, th)
}
myGril(100)
myGril(100, 'cheng')
myGril(100, 'cheng', true)
console.log(myGril.length) // 函数形参的个数，默认值会截断，这个语法和js是一样的

// 类型推论
let alicb = 'cb'
