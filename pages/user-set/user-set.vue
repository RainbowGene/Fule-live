<template>
	<view>
		<view class="p-3 flex align-center justify-center">
			<view style="height: 90rpx;" class="bg-main rounded px-3 flex align-center justify-center flex-1" hover-class="bg-main-hover"
			 @click="loginout">
				<text class="text-white font-md">退出登录</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			loginout() {
				this.$store.dispatch('loginout').then(res => {
					uni.navigateBack({
						delta: 1
					})
				})
			}
		}
	}
</script>

<style>

</style>
