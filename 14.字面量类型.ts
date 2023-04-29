/* 
    字面量类型 通常配合 联合类型 去使用
    应用场景非常广，用户性别选择，methods方法，组件按钮大小颜色等
*/
type methods = 'PUT' | 'DELETE' | 'POST' | 'GET'
let method: methods = 'DELETE'

let sex: '男' | '女' | '跨性别'
sex = '女'
