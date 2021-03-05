export function request(config) {
	const baseURL = 'https://api-hmugo-web.itheima.net/api/public/v1';
	return uni.request({
		url:baseURL + config.url,
		method:config.method || 'GET',
		data:config.data || {}
	})
}