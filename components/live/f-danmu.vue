<template>
	<!-- 弹幕 -->
	<view style="position: fixed;bottom: 120rpx;left: 0;right: 0;">
		<scroll-view scroll-y class="pl-3" style="width: 520rpx;height: 320rpx;" scroll-with-animation :scroll-into-view="scrollIntoView">
			<view :id="'danmu'+item.id" v-for="(item,index) in list" :key="index" class="flex justify-start align-start rounded p-2 mb-1"
			 style="background-color: rgba(255,255,255,0.125);">
				<text class="font-md text-danger">{{item.name}}: </text>
				<text class="font-md text-white">{{item.content}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollIntoView: '',
				list: []
			}
		},
		methods: {
			send(data) {
				this.list.push(data)
				this.toBottom()
			},
			// 置于顶部
			toBottom() {
				setTimeout(() => {
					let len = this.list.length
					if (len > 0 && this.list[len - 1]) {
						this.scrollIntoView = 'danmu' + this.list[len - 1].id
					}
				}, 200);
			}
		}
	}
</script>

<style>
</style>
