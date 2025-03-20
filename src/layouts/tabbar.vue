<template>
    <view class="tabbar-app-layout">
      <slot />
    </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
  .tabbar-app-layout {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
</style>
