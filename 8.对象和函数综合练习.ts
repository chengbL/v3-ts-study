type ObjType = { url: string; method?: string }
const axios = (obj: ObjType) => {
  console.log(obj)
}
axios({ url: '/api' })
axios({ url: '/api', method: 'GET' })
