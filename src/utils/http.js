// 引入axios
import axios from 'axios'

import { Message } from 'element-ui'

// axios.defaults.baseURL = '/api'
// 设置默认请求头
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest'
}
axios.defaults.timeout = 10000

// 请求拦截器
axios.interceptors.request.use(config => {
  config.headers = {
    'Content-Type': 'application/json'
  }
  // if(token){
  //   config.token = {'token':token}
  // }
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器即异常处理
axios.interceptors.response.use(response => {
  console.log(response)

  if (response.status != 200 && response.status != 304 && response.status != 200) {
    // console.log("err")
    Message.error(response.statusText)
  } else {
    switch (response.data.code) {
      // 处理共有的操作
      case 404:
        Message.error(response.data.msg)
      case 200:
        return response.data
    }
  }

  /* switch(response.data.code) {
		//处理共有的操作
		case 404:
			Message.error(response.data.msg)

	} */

  // Message.error(err.message)
}, error => {
  console.log(error)

  // Message.error("连接到服务器失败")
  return Promise.resolve(error.response)
})

export default {
  // get请求
  get (url, param = {}) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: param
      }).then(res => {
        resolve(res)
      })
    })
  },
  // post请求
  post (url, param = {}) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: param
      }).then(res => {
        resolve(res)
      })
    })
  },
  // put请求
  put (url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.put(url, data)
        .then(response => {
          resolve(response.data)
        }, err => {
          reject(err)
        })
    })
  }
}
