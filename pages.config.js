import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages';
import { name } from './package.json';

/**
 * 全局配置
 */
export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: name,
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTextStyle: 'black',
    backgroundColor: '#FFFFFF',
  },
  easycom: {
    autoscan: true,
    custom: {
      '^uv-(.*)': '@climblee/uv-ui/components/uv-$1/uv-$1.vue'
    },
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#5474f2',
    backgroundColor: '#ffffff',
    borderStyle: 'black',
    height: '50px',
    fontSize: '10px',
    iconWidth: '24px',
    spacing: '3px',
    list: [
      {
        iconPath: '/static/tabbar/home_default.png',
        selectedIconPath: '/static/tabbar/home_active.png',
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        iconPath: '/static/tabbar/my_default.png',
        selectedIconPath: '/static/tabbar/my_active.png',
        pagePath: 'pages/my/index',
        text: '我的',
      },
    ],
  },
});
