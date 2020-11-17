<template>
	<view class="border-top border-light-secondary p-3">
		<!-- 我的余额 -->
		<view class="rounded py-5 flex flex-column align-center justify-center bg-main">
			<text class="text-white font-sm mb-2">当前金币</text>
			<text class="font-weight-bold text-white" style="font-size: 60rpx;">50</text>
		</view>
		<!-- 分割线 -->
		<view class="border-top border-light-secondary my-3"></view>
		<view>
			<text class="font-sm text-muted ">请选择充值金币数</text>
		</view>
		<!-- 充值项 -->
		<view class="flex flex-wrap justify-between mt-1">
			<view v-for="(item,i) in list" :key="i" class="flex flex-column align-center justify-center rounded border border-light-secondary mt-3"
			 @click="chooseCoin(i)" :class="activeIndex === i?'border-main':''" style="width: 210rpx;height: 150rpx;">
				<view v-if="item.coin">
					<text class="iconfont text-warning font-md mr-1">&#xe609;</text>
					<text class="font-weight-bold font-md mt-1">¥{{item.coin}}</text>
				</view>
				<view v-if="item.coin" class="mt-1">
					<text class="font text-light-muted">{{item.price}}</text>
				</view>
				<view v-else>
					<text class="font-md text-light-muted">自定义</text>
				</view>
			</view>
		</view>

		<!-- 底部 -->
		<view class="position-fixed left-0 bottom-0 right-0 border-top flex align-center px-3" style="height: 100rpx;">
			<view>
				<text class="iconfont text-warning font-md mr-1">&#xe609;</text>
				<text class="font-weight-bold font-md mt-1">{{price}}</text>
			</view>
			<view class="bg-main rounded flex align-center justify-center ml-auto" style="width: 120rpx;height: 65rpx;">
				<text class="text-white font-md">充值</text>
			</view>
		</view>

		<!-- 自定义价格弹出框 -->
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog mode="input" inputType="number" title="自定义充值" message="自定义充值" placeholder="充值金额" :duration="2000"
			 :before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-ui/uni-popup/uni-popup.vue"
	import uniPopupDialog from "@/components/uni-ui/uni-popup/uni-popup-dialog.vue"
	export default {
		components: {
			uniPopup,
			uniPopupDialog
		},
		data() {
			return {
				price: 10,
				activeIndex: 0,
				list: [{
						coin: 10,
						price: 10
					},
					{
						coin: 20,
						price: 20
					},
					{
						coin: 30,
						price: 30
					},
					{
						coin: 50,
						price: 50
					},
					{
						coin: 100,
						price: 100
					},
					{
						price: 0
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			chooseCoin(i) {
				this.activeIndex = i;
				if (this.list[i].price > 0) {
					this.price = this.list[i].price;
				} else {
					// 自定义价格
					this.$refs.popup.open()
				}
			},
			close(done) {
				done()
			},
			// 提交按钮
			confirm(done, value) {
				if (!value) {
					return uni.showToast({
						title: '请输入大于0的金币数',
						icon: 'none'
					});
				};
				this.price = value
				done()
			}
		}
	}
</script>

<style>
	.jsa {
		justify-content: space-around;
	}
</style>
