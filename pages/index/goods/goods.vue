<template>
	<view>
		<goods :goodsData="goodsData"></goods>
	</view>
</template>

<script>
	import goods from '../../../components/goods.vue'
	import {
		getGoods
	} from '../../../newwork/home.js'
	export default {
		onLoad(){
			this.getGoods()
		},
		components:{
			goods
		},
		data() {
			return {
				goodsData:[]
			}
		},
		methods: {
			getGoods(){
				getGoods(2).then(res=>{
					this.goodsData = res[1].data.message.goods
				})
			}
		}
	}
</script>

<style>

</style>
