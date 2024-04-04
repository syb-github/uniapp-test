<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<u-icon name="photo" color="#2979ff" size="28"></u-icon>
		</view>
	</view>
</template>


<script>
	import * as api from '@/api/api.js'
	
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			api.excute().then(res => {
				console.log(res);
				this.title = res.data
			}).catch(err => {
				console.log(err);
			})
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: $u-type-success;
	}
</style>
