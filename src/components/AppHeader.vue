<!-- description: header -->
<!-- fileName: Header.vue -->
<!-- author: iwen(1044803551@qq.com) -->

<script setup>
</script>

<template>
    <div class="app-header">
        <view class="status_bar">
            <!-- 这里是状态栏 -->
        </view>

        <!-- #ifdef MP-WEIXIN-->
        <header class="header">
			
		</header>
		<!-- #endif -->
    </div>
</template>

<style lang='scss' scoped>
.app-header {
    width: 100vw;
    .status_bar {
        height: var(--status-bar-height);
        width: 100%;
    }
    .header {
        width: 100%;
        height: 44px;
        background: rgba(0, 0, 0, 0.2);
    }
}
</style>