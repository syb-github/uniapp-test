
// 封装request 请求方法
const request = (config) => {
	// 拼接请求路径
	config.url = 'http://localhost:8080' + config.url
	// 判断请求是否携带参数
	if (!config.data) {
		config.data = {}
	}
	config.method = 'POST';
	config.header = {
		'content-type': 'application/json'
	}
	console.log(config);
	let promise = new Promise(function(resolve, reject) {
		uni.request(config).then(res => {
			console.log("res", res);
			if (res.statusCode !== 200) {
				reject({message: '请求失败'});
			} else {
				let data = res.data
				resolve(data);
			}
		}).catch(err => {
			// 请求失败
			uni.showToast({
				title: '请求失败',
				duration: 2000
			})
			reject(err)
		})
	})
	return promise;
}

export default request;