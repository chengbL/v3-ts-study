// 作用： 十分肯定的说，它是一个什么类型
// 有时候你会比 TS 更加明确一个值的类型，此时，可以使用类型断言来指定更具体的类型。

// const alink = document.querySelector('link')

// - 注意：该方法返回值的类型是 HTMLElement，该类型只包含所有标签公共的属性或方法，不包含 a 标签特有的 href 等属性
// - 因此，这个**类型太宽泛(不具体)**，无法操作 href 等 a 标签特有的属性或方法
// - 解决方式：这种情况下就需要**使用类型断言指定更加具体的类型**
// - 使用类型断言：

// const aLink = document.querySelector('link') as HTMLAnchorElement

// const alink = <HTMLAnchorElement>document.querySelector('link')
