/*
    interface继承，interface 类型名 extends 要继承的类型名 {要添加的属性}
    type 继承, type 类型名 = 继承的类型名 & {要添加的属性}
*/
type Point2D = {
  x: number
  y: number
}

type Point3D = {
  z: number
}

type Point4D = {
  m: string
}

// const point3D: Point3D = {
//   x: 100,
//   y: 100,
//   z: 1
// }

// !!建议继承一个不建议继承多个
const point3D: Point2D & Point3D & Point4D = {
  x: 100,
  y: 100,
  z: 1,
  m: 'cheng'
}

console.log(point3D)
