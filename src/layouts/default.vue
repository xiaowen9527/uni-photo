<!-- description: default -->
<!-- fileName: default.vue -->
<!-- author: iwen(1044803551@qq.com) -->

<script setup>

</script>

<template>
    <view class="layout-page">

        <!-- <view class="layout-header">
            <slot name="header">header</slot>
        </view> -->

        <view class="layout-main">
            <slot />
        </view>

        <!-- <view class="layout-footer">
            <slot name="footer">footer</slot>
        </view> -->

    </view>
</template>

<style lang='scss' scoped>
.layout-page{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .layout-header{
        height: 44px;
        width: 100%;
    }
    .layout-main{
        flex: 1;
        width: 100%; 
    }
   .layout-footer{
        height: 68px;
        width: 100%;
   }
}
</style>