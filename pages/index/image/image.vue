<template>
	<view class="image">
		<scroll-view class="left" scroll-y>
			<view v-for="(item,index) in leftData" 
			:key='item.id' @click="changeIndex(index)"
			:class="{active:index===currentIndex}">
				{{item.title}}
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				leftData:[
					{
						title:'家居生活',
						id:1
					},
					{
						title:'摄影设计',
						id:2
					},
					{
						title:'明星美女',
						id:3
					},
					{
						title:'空间设计',
						id:4
					},
					{
						title:'户型装饰',
						id:5
					},
					{
						title:'广告摄影',
						id:6
					},
					{
						title:'摄影学习',
						id:7
					},
					{
						title:'摄影器材',
						id:8
					},
					{
						title:'明星写真',
						id:9
					},
					{
						title:'清纯甜美',
						id:10
					},
					{
						title:'古典美女',
						id:11
					}
					
				],
				currentIndex:0
			}
		},
		methods: {
			changeIndex(index){
				this.currentIndex = index
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%
	}
	.image{
		height: 100%;
		.left{
			width: 200rpx;
			height: 100%;
			view{
				height: 60px;
				line-height: 60px;
				text-align: center;
				color: #333;
				font-size: 30rpx;
				border-bottom: 1px solid #eee;
				border-right: 1px solid #eee;
			}
			.active{
				background-color: $uni-font-color;
				color: #fff;
			}
		}
	}
	
</style>
