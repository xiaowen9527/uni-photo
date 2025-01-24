<template>
    <view class="w-screen h-screen flex flex-col ">
        <app-header />
        <view class="flex-1">
            <slot />
        </view>
        <app-footer />
    </view>
</template>
