<template>
	<view class="home">
		<!-- 轮播图 -->
		<swiper indicator-dots circular autoplay interval=2000>
			<swiper-item v-for="item in swiperData" :key='item.id'>
				<image :src="item.image_src"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navData" :Key='index' @click="nvaClick(item.path)">
				<view :class="item.class"></view>
				<text>{{item.text}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="recommend">
			<view class="title">
				推荐商品
			</view>
			<goods :goodsData='goodsData'></goods>
		</view>
	</view>
</template>

<script>
	import {
		swiper,getGoods
	} from '../../newwork/home.js'
	import goods from '../../components/goods.vue'
	export default {
		data() {
			return {
				navData:[
					{
						class:"iconfont icon-chaoshi",
						text:'小小超市',
						path:'/pages/index/goods/goods'
					},
					{
						class:"iconfont icon-guanyu",
						text:'联系我们',
						path:'/pages/index/contact/contact'
					},
					{
						class:"iconfont icon-tupian",
						text:'社区图片',
						path:'/pages/index/image/image'
					},
					{
						class:"iconfont icon-shipin1",
						text:'学习视频',
						path:'/pages/index/video/video'
					},
					
				],
				swiperData: [],
				goodsData:[]
			}
		},
		components:{
			goods
		},
		onLoad() {
			this.getSwiperData()
			this.getGoods()
		},
		methods: {
			getSwiperData() {
				swiper().then(res => {
					this.swiperData = res[1].data.message
				})
			},
			getGoods(){
				getGoods(3).then(res =>{
					this.goodsData = res[1].data.message.goods
				})
			},
			nvaClick(path){
				uni.navigateTo({
					url:path
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

		.nav {
			display: flex;
			justify-content: space-around;
			text-align: center;

			.nav_item {
				view {
					width: 120rpx;
					height: 120rpx;
					border-radius: 50%;
					background-color: $uni-font-color;
					margin: 10px auto;
					line-height: 120rpx;
					font-size: 50rpx;
				}
			}
		}

		.recommend {
			margin-top: 30rpx;
			background-color: #eee;
			overflow: hidden;

			.title {
				color: $uni-font-color;
				height: 100rpx;
				line-height: 100rpx;
				font-size: 20px;
				text-align: center;
				letter-spacing: 40rpx;
				background-color: #fff;
				margin: 7rpx 0;
			}

			
		}
	}
</style>
