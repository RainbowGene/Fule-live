<script>
	export default {
		onLaunch: function() {
			// 加载公共图标库
			// #ifdef APP-NVUE
			const domModule = weex.requireModule('dom')
			domModule.addRule('fontFace', {
				'fontFamily': "iconfont",
				'src': "url('http://at.alicdn.com/t/font_2207330_ac5iuleebod.ttf'')"
			});
			// #endif

			// 监听tabbar 中间凸起按钮
			uni.onTabBarMidButtonTap(() => {
				console.log('点击了中间按钮')
			})
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
