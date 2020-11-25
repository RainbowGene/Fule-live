import Vue from 'vue'
import App from './App'
import $H from './common/js/request.js';
import store from './store/index.js';

Vue.prototype.$H = $H
Vue.prototype.$store = store

// 权限验证
Vue.prototype.authJump = (options) => {
	if (!store.state.token) {
		uni.showToast({
			icon: 'none',
			title: '请先登录'
		})
		return uni.navigateTo({
			url: "/pages/login/login"
		})
	}
	uni.navigateTo(options)
};

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
