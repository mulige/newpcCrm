// 引入axios
import axios from 'axios'

import { Message } from 'element-ui'
import { Loading } from 'element-ui'


let loading
let needLoadingRequestCount = 0
export function showFullScreenLoading() {
    if (needLoadingRequestCount === 0) {
        loading = Loading.service({
					lock: true,
			    text: '加载中',
			    background: 'rgba(0, 0, 0, 0.0)',
			    target: '#app'
		 		});
    }
    needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
    if (needLoadingRequestCount <= 0) return
    needLoadingRequestCount--
    if (needLoadingRequestCount === 0) {
        loading.close()
    }
}
// axios.defaults.baseURL = '/api'
// 设置默认请求头
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest'
}
/*axios.defaults.timeout = 10000*/


// 请求拦截器
axios.interceptors.request.use(config => {
	
  config.headers = {
    'Content-Type': 'application/json'
  }
  // if(token){
  //   config.token = {'token':token}
  // }
  showFullScreenLoading()
  return config
}, error => {
	tryHideFullScreenLoading()
  return Promise.reject(error)
})

// 响应拦截器即异常处理
axios.interceptors.response.use(response => {
  tryHideFullScreenLoading()
	console.log(response)
  if (response.status != 200 && response.status != 304) {
    // console.log("err")
    Message.error(response.statusText || '服务器错误')
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
	tryHideFullScreenLoading()
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
  put (url, param = {}) {
    return new Promise((resolve, reject) => {
      axios.put(url, param)
        .then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
    })
  },
  // delete
  delete (url,param = {}){
  	return new Promise((resolve, reject) => {
      axios.delete(url, param)
        .then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
    })
  }
}
