<template>
	<view>
		<view class="flex align-center justify-center" style="height: 350rpx;">
			<text style="font-size: 50rpx;">Fox-Live</text>
		</view>
		<view class="px-3 flex flex-column">
			<input type="text" class="bg-light px-3 mb-3 font" placeholder="请输入用户名" v-model="form.username" style="height: 100rpx;" />
			<input type="text" class="bg-light px-3 mb-3 font" placeholder="请输入密码" v-model="form.password" style="height: 100rpx;" />
			<input v-if="type!=='login'" type="text" class="bg-light px-3 mb-3 font" placeholder="请输入确认密码" v-model="form.repassword"
			 style="height: 100rpx;" />
		</view>
		<view class="p-3 flex align-center justify-center">
			<view style="height: 90rpx;" class="bg-main rounded px-3 flex align-center justify-center flex-1" hover-class="bg-main-hover"
			 @click="submit">
				<text class="text-white font-md">{{type==='login'?'登 录':'注 册'}}</text>
			</view>
		</view>
		<view class="flex align-center justify-center" @click="changeType">
			<text class="text-light-muted font p-2">{{type==='login'?'注册账号':'前往登录'}}</text>
		</view>
	</view>
</template>

<script>
	import $H from "@/common/js/request.js"
	export default {
		data() {
			return {
				type: "login",
				form: {
					username: '13026636499',
					password: '123456',
					repassword: ''
				},
			}
		},
		methods: {
			changeType() {
				this.type = this.type === 'login' ? 'reg' : 'login';
			},
			// 登录/注册
			submit() {
				let msg = this.type === 'login' ? '登录' : '注册'
				this.$H.post(`/${this.type}`, this.form).then(res => {
					uni.showToast({
						title: msg + '成功',
						icon: 'none'
					});
					if (this.type === 'reg') {
						this.changeType();
						this.form = {
							username: '',
							password: '',
							repassword: ''
						}
					} else {
						this.$store.dispatch('login', res)
						// 返回上一页
						uni.navigateBack({
							delta: 1
						})
					}
				})
			}
		}
	}
</script>

<style>

</style>
