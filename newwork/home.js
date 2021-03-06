import {request} from './request.js'

export function swiper(){
	return request({
		url:'/home/swiperdata'
	})
}

export function getGoods(pagenum){
	return request({
		url:'/goods/search',
		data:{
			pagenum
		}
	})
}