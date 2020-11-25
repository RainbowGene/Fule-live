<script>
	export default {
		onLaunch: function() {
			// 加载公共图标库
			const domModule = weex.requireModule('dom')
			domModule.addRule('fontFace', {
				'fontFamily': "iconfont",
				'src': "url('http://at.alicdn.com/t/font_2207330_4hoc3aj1i8.ttf')"
			});
			this.$store.dispatch('connectSocket'); //测试连接socket
			// 监听tabbar 中间凸起按钮
			uni.onTabBarMidButtonTap(() => {
				this.authJump({
					url: "/pages/create-live/create-live"
				})
			})

			// 初始化用户状态
			this.$store.dispatch('initUser')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("/common/css/free.css");
	@import url("/common/css/common.css");
	/* #ifndef APP-PLUS-NVUE */
	@import url("/common/css/iconfont.css");
	/* #endif */
</style>
