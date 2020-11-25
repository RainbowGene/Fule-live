import Vue from 'vue';
import Vuex from 'vuex';
import $H from "@/common/js/request.js"
import io from "@/common/js/uni-socket.io.js"
import $C from "@/common/js/config.js"

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		user: null,
		token: null,
		socket: null
	},
	actions: {
		// 初始化用户登录状态
		initUser({
			state
		}) {
			let u = uni.getStorageSync('user')
			let t = uni.getStorageSync('token')
			if (u) {
				state.user = JSON.parse(u)
				state.token = t
			}
		},
		login({
			state
		}, user) {
			state.user = user;
			state.token = user.token;
			uni.setStorageSync('user', JSON.stringify(user));
			uni.setStorageSync('token', user.token);
		},
		// 连接socket
		connectSocket({
			state,
			dispatch
		}) {
			const S = io($C.socketUrl, {
				query: {},
				transports: ['websocket'],
				timeout: 5000, // 超时时间
			})

			// 监听连接
			S.on('connect', () => {
				console.log('已连接');
				state.socket = S;
				// 接收后端数据  S.id 是唯一id:实现点对点的通讯
				const {
					id
				} = S
				S.on(id, (e) => {
					let d = e.data;
					if (d.action === 'error') {
						let msg = d.payload
						return uni.showToast({
							title: msg,
							icon: 'none'
						});
					}
				})
			})

			// 监听失败
			S.on('error', () => {
				state.socket = null;
				console.log('连接失败');
			})

			// 监听断开
			S.on('disconnect', () => {
				state.socket = null;
				console.log('已断开');
			})


		},
		getUserInfo({
			state
		}) {
			$H.get('/user/info', {
				token: true, // 传token
				noJump: true, // 不跳转
				toast: false // 不提示
			}).then(res => {
				state.user = res
				uni.setStorage({ // 本地存储
					key: 'user',
					data: JSON.stringify(state.user)
				})
			})
		},
		loginout({
			state
		}) {
			$H.post('/logout', {}, {
				token: true,
				toast: true,
			})
			state.user = null;
			state.token = null;
			uni.removeStorageSync('user')
			uni.removeStorageSync('token')
		},
		// 权限验证
		authMethod({
			state
		}, callback) {
			if (state.token) {
				uni.showToast({
					icon: 'none',
					title: '请先登录'
				})
				return uni.navigateTo({
					url: "/pages/login/login"
				})
			}
			callback()
		}
	}
})
