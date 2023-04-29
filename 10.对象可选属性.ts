type Config = {
  url: string
  method?: string
}

function myAxios (config: Config) {
  console.log(config)
}

// 使用 `axios({ ... })` 时，如果发送 GET 请求，method 属性就可以省略
// 使用案例1
// axios({
//   url: 'xxx',
//   method: 'POST',
// })
// // 使用案例2
// axios({
//   url: 'xxx',
// })

// 答案
type ObjType = {
  url: string
  method?: string
}

const axios = (obj: ObjType) => {
  console.log('obj', obj)
}
