type ExpType = (number | string | boolean | undefined)[]
let arr: ExpType = [1, false, 'kl', undefined, true]
console.log('arr:', arr)

/**
 * !当一种类型被重复使用，可以先定义改类型
 * 如 type name = (number | string | boolean | undefined)[]
 */
