<template>
	<view>
		<!-- 未登录 -->
		<view v-if="!user" class="flex align-center">
			<view class="flex align-center justify-center" style="height: 180rpx;width: 180rpx;">
				<image src="../../static/gift/3.png" class="rounded-circle" style="width: 105rpx;height: 105rpx;"></image>
			</view>
			<view class="flex flex-column">
				<text class="font-md mb-2">未登录</text>
				<text class="font text-muted">登录体验更多功能</text>
			</view>
			<view class="ml-auto mr-3" hover-class="bg-light" @click="openLogin">
				<view class="border border-main rounded flex justify-center align-center p-2">
					<text class="text-main font">立即登录</text>
				</view>
			</view>
		</view>
		<!-- 登录 -->
		<view v-else class="flex align-center">
			<view class="flex align-center justify-center" style="height: 180rpx;width: 180rpx;">
				<image :src="user.avatar||'../../static/gift/3.png'" class="rounded-circle" style="width: 105rpx;height: 105rpx;"></image>
			</view>
			<view class="flex flex-column">
				<text class="font-md mb-2">{{user.username}}</text>
				<!-- <text class="font text-muted">描述</text> -->
			</view>
			<view class="ml-auto mr-3" hover-class="bg-light">
				<view class="border border-main rounded flex justify-center align-center p-2">
					<text class="text-main font">编辑资料</text>
				</view>
			</view>
		</view>
		<view class="f-divider"></view>
		<!-- 选项 -->
		<f-list-item icon="iconqingxidu1" title="我的金币" :showRight="false" @click="authJump({url:'/pages/coin/coin'})">
			<text class="text-muted font">{{user?user.coin:0}}金币 点击充值</text>
		</f-list-item>
		<f-list-item icon="iconqingxidu1" title="我的直播">
			<text class="text-muted font">0</text>
		</f-list-item>
		<f-list-item icon="iconqingxidu1" title="我的关注">
			<text class="text-muted font">0</text>
		</f-list-item>
		<f-list-item icon="iconqingxidu1" title="历史记录">
			<text class="text-muted font"></text>
		</f-list-item>
	</view>
</template>

<script>
	import fListItem from "@/components/common/f-list-item.vue"
	import {
		mapState
	} from "vuex"
	export default {
		components: {
			fListItem
		},
		computed: {
			...mapState({
				user: state => state.user
			})
		},
		onShow() {
			// 更新到最新用户信息
			this.$store.dispatch('getUserInfo')
		},
		onNavigationBarButtonTap() {
			this.authJump({
				url: "../user-set/user-set"
			})
		},
		data() {
			return {

			}
		},
		methods: {
			openLogin() {
				uni.navigateTo({
					url: "../login/login"
				})
			}
		}
	}
</script>

<style>

</style>
