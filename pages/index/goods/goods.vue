<template>
	<view>
		<goods :goodsData="goodsData"></goods>
		<view class="bottom" :v-if="flag">-----我是有底线的-----</view>
	</view>
</template>

<script>
	import goods from '../../../components/goods.vue'
	import {
		getGoods
	} from '../../../newwork/home.js'
	export default {
		onLoad() {
			this.getGoods()
		},
		components: {
			goods
		},
		data() {
			return {
				goodsData: [],
				pages: 1,
				total: 100,
				flag: false
			}
		},
		onReachBottom() {
			this.pages++
			this.getGoods()
		},
		onPullDownRefresh() {
			this.goodsData = []
			this.pages = 1
			setTimeout(() => {
				this.getGoods()
				this.flag = false
				uni.stopPullDownRefresh()
			}, 1000)
		},
		methods: {
			getGoods() {
				if (this.goodsData.length >= this.total)
					return this.flag = true
				getGoods(this.pages).then(res => {
					this.total = res[1].data.message.total
					this.goodsData.push(...res[1].data.message.goods)
				})
			}
		}
	}
</script>

<style>
	.bottom {
		text-align: center;
		line-height: 50px;
		height: 50px;
		font-size: 28rpx;
		background-color: #eee;
	}
</style>
