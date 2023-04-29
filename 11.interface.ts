/* 
    interface ：中文翻译：接口，
    原文解释：是把所需成员组合起来，用来封装一定功能的集合
    
    用来描述对象，与 type 是一样

    早期时候，并没有 type，使用 interface
    type：不仅可以描述对象，还可以描述其他类型
    interface： 仅仅可以描述对象(数组都不行),在过去开发的框架上，使用比较多

    语法上有点不同, type 有等于号
     type 类型 = {对象的描述;}
     interface 类型 {对象的描述;}
*/

interface IPerson {
  name: string
  age: number
  sayHi(): void
}

// let person: IPerson = {
//   name: 'jack',
//   age: 19,
//   sayHi () {}
// }
