import request from '@/api/request.js'

// 执行请求
export function excute (){
	let config = {
		url: '/mini-login/login',
		data: {
			msg: '1'
		}
	}
	return request(config)
}