<template>
	<view class="contact">
		<image src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1600743078,1143915335&fm=15&gp=0.jpg"></image>
		<view class="info">
			<view @click="callPhone">联系电话:xxxxxxxxx(拨打电话)</view>
			<view>联系地址:xxxxxxxxxxx</view>
		</view>
		<map :longitude='longitude' :latitude='latitude' :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:120,
				latitude:30,
				markers:[{
					longitude:120,
					latitude:30,
					iconPath:'/static/icon/flag.png'
				}]
			}
		},
		methods: {
			callPhone(){
				uni.makePhoneCall({
					phoneNumber:"1888"
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact{
		image{
			width: 100%;
			height: 375rpx;
		}
		.info{
			padding: 10rpx 20rpx;
			view{
				line-height: 80rpx;
				font-size: 30rpx;
				border-bottom: 1px solid;
			}
			
		}
		map{
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
