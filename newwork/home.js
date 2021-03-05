import {request} from './request.js'

export function swiper(url){
	return request({
		url:'/home/swiperdata'
	})
}