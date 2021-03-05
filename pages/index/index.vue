<template>
	<view class="home">
		<swiper indicator-dots circular autoplay interval=2000>
			<swiper-item v-for="item in swiperDate" :key='item.id'>
				<image :src="item.image_src"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item">
				<view class="iconfont">&#xe60b;</view>
				<text>小小超市</text>
			</view>
				<view class="nav_item">
				<view class="iconfont">&#xe634;</view>
				<text>联系我们</text>
			</view>
				<view class="nav_item">
				<view class="iconfont">&#xe6ca;</view>
				<text>社区图片</text>
			</view>
				<view class="nav_item">
				<view class="iconfont">&#xe637;</view>
				<text>学习视频</text>
			</view>
			
		</view>
	</view>
</template>

<script>
	import {
		swiper
	} from '../../newwork/home.js'
	export default {
		data() {
			return {
				swiperDate: []
			}
		},
		onLoad() {
			this.getSwiperDate()
		},
		methods: {
			getSwiperDate() {
				swiper().then(res => {
					this.swiperDate = res[1].data.message
				})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				height: 410rpx;
				//height: 100%;
				width: 100%;
			}
		}
	}
	.nav{
		display: flex;
		justify-content: space-around;
		text-align: center;
		.nav_item{
			view{
				width: 120rpx;
				height: 120rpx;
				border-radius: 50%;
				background-color: #b50e03;
				margin: 10px auto;
				line-height: 120rpx;
				font-size: 50rpx;
			}
		}
	}
</style>
