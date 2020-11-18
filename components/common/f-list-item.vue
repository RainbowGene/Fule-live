<template>
	<view class="p-3 flex align-center" hover-class="bg-light" @click="$emit('click')">
		<text class="iconfont mr-2" :class="icon"></text>
		<text class="font-md">{{title}}</text>
		<view class="justify-center ml-auto">
			<slot></slot>
			<text v-if="showRight" class="ml-2 text-muted font iconfont">&#xe604;</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			icon: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: ''
			},
			showRight: {
				type: Boolean,
				default: true
			}
		},
	}
</script>

<style>
</style>
