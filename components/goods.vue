<template>
	<view class="good_list">
		<view class="good_item" v-for="item in goodsData" :key='item.good_id'>
			<image :src="item.goods_big_logo"></image>
			<view class="price">
				<text>{{'￥'+item.goods_price}}</text>
				<!-- <text>￥2199</text> -->
			</view>
			<view class="name">
				{{item.goods_name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'goods',
		data() {
			return {
				goodsDatas: this.goodsData
			}
		},
		props: {
			goodsData: {
				type: Array,
				default: []
			}
		}
	}
</script>

<style lang="scss">
	.good_list {
		margin-top: 30rpx;
		background-color: #eee;
		overflow: hidden;
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.good_item {
			background-color: #fff;
			padding: 15rpx;
			border-radius: 10rpx;
			box-sizing: border-box;
			width: 355rpx;
			margin: 10rpx 0;

			image {
				height: 150px;
				width: 90%;
				display: block;
				margin: 0 auto;
			}
		}

		.price {
			color: $uni-font-color;
			font-size: 36rpx;

			/* text:nth-child(2) {
				color: #ccc;
				font-size: 28rpx;
				margin-left: 20rpx;
				text-decoration: line-through;
			} */
		}

		.name {
			font-size: 28rpx;
			line-height: 50rpx;
			padding: 15rpx 0;
		}
	}
</style>
