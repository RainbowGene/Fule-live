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
			<view v-for="(item,index) in list" :key="index" class="rounded b-box position-relative" style="width: 375rpx;padding: 5rpx;"
			 @click="openLive(item.id)">
				<image :src="item.cover||'/static/1.jpg'" style="width: 360rpx;" mode="aspectFill"></image>
				<view class="rounded-circle position-absolute flex align-center px-2" style="left: 15rpx;top: 15rpx;background-color: rgba(0,0,0,0.4);">
					<text class="iconfont">&#xe609;</text>
					<text class="text-white ml-1 font mt-1">{{item.coin}}</text>
				</view>
				<view class="rounded-circle position-absolute flex align-center px-2" style="right: 15rpx;top: 15rpx;background-color: rgba(0,0,0,0.4);">
					<text class="font text-white mt-1">人气：{{item.look_count}}</text>
				</view>
				<view class="rounded-circle position-absolute flex align-center px-2" style="left: 15rpx;bottom: 15rpx;background-color: rgba(0,0,0,0.4);">
					<text class="font text-white mt-1">{{item.title}}</text>
				</view>
				<view class="rounded-circle position-absolute flex align-center px-2 py" style="right: 15rpx;bottom: 25rpx;background-color: rgba(0,0,0,0.4);">
					<text class="rounded-circle mr-1" style="width: 20rpx;height: 20rpx;" :class="'bg-'+(item.status===1?'success':'danger')"></text>
					<text class="iconfont font text-white font-sm">{{item.status|formatStatus}}</text>
				</view>
			</view>
		</view>

		<!-- 上拉提示 -->
		<view class="f-divider"></view>
		<view class="flex align-center justify-center py-3">
			<text class="font-md text-secondary">{{loadmsg}}</text>
		</view>
	</view>
</template>

<script>
	import $H from "@/common/js/request.js"
	export default {
		data() {
			return {
				list: [],
				page: 1,
				loadmsg: '上拉加载更多'
			}
		},
		onLoad() {
			this.getData();
		},
		filters: {
			formatStatus(value) {
				let o = {
					0: '未开始',
					1: '直播中',
					2: '暂停',
					3: '已结束',
				}
				return o[value]
			}
		},
		onPullDownRefresh() {
			this.page = 1
			this.getData().then(res => {
				uni.showToast({
					title: '刷新成功',
					icon: 'none'
				});
				uni.stopPullDownRefresh()
			}).catch(err => {
				uni.stopPullDownRefresh()
			})
		},
		// 上拉
		onReachBottom() {
			if (this.loadmsg !== '上拉加载更多') return;
			this.loadmsg = '加载中...';
			this.page++;
			this.getData();
		},
		methods: {
			getData() {
				let page = this.page
				return this.$H.get('/live/list/' + page).then(res => {
					this.list = page === 1 ? res : [...this.list, ...res];
					// 判断是否还有更多
					this.loadmsg = res.length < 10 ? '没有更多了' : '上拉加载更多'
				}).catch(err => {
					if (this.page > 1) {
						this.page--
						this.loadmsg = '上拉加载更多';
					}
				})
			},
			openLive(id) {
				uni.navigateTo({
					url: '../live/live?id=' + id
				})
			}
		}
	}
</script>

<style>

</style>
