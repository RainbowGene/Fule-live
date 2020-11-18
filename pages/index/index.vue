<template>
	<view>
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="300" style="width: 750rpx;height: 250rpx;">
			<swiper-item>
				<image style="width: 750rpx;height: 250rpx;" src="../../static/banner/1.jpg"></image>
			</swiper-item>
			<swiper-item>
				<image style="width: 750rpx;height: 250rpx;" src="../../static/banner/2.jpg"></image>
			</swiper-item>
		</swiper>

		<!-- 列表 -->
		<view class="flex flex-wrap my-1">
			<view v-for="i in 10" :key="i" class="rounded b-box position-relative" style="width: 375rpx;padding: 5rpx;" @click="openLive">
				<image src="../../static/1.jpg" style="width: 360rpx;" mode="aspectFill"></image>
				<view class="rounded-circle position-absolute flex align-center px-2" style="left: 15rpx;top: 15rpx;background-color: rgba(0,0,0,0.4);">
					<text class="iconfont">&#xe609;</text>
					<text class="text-white ml-1 font mt-1">0</text>
				</view>
				<view class="rounded-circle position-absolute flex align-center px-2" style="right: 15rpx;top: 15rpx;background-color: rgba(0,0,0,0.4);">
					<text class="font text-white mt-1">人气：1</text>
				</view>
				<view class="rounded-circle position-absolute flex align-center px-2" style="left: 15rpx;bottom: 15rpx;background-color: rgba(0,0,0,0.4);">
					<text class="font text-white mt-1">直播间1</text>
				</view>
				<view class="rounded-circle position-absolute flex align-center px-2 py" style="right: 15rpx;bottom: 25rpx;background-color: rgba(0,0,0,0.4);">
					<text class="rounded-circle bg-danger mr-1" style="width: 20rpx;height: 20rpx;"></text>
					<text class="iconfont font text-white font-sm">已结束</text>
				</view>
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
		onLoad() {

		},
		methods: {
			openLive() {
				uni.navigateTo({
					url: '../live/live'
				})
			}
		}
	}
</script>

<style>

</style>
