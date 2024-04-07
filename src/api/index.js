import http from '../utils/request'

//请求首页数据
export const getData = () => {
  //返回Promise对象(两种写法)
  // return http.get('/home/getData')
  return http({
    url:'/home/getData',
    method:'get'
  })
}