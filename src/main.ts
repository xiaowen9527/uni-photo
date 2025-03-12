import { createSSRApp } from 'vue'
import App from './App.vue'
import 'uno.css'

import uvUI from '@/uni_modules/uv-ui-tools'



export function createApp() {

    const app = createSSRApp(App)

    // #ifndef VUE3
    Vue.use(uvUI);
    // #endif

    // #ifdef VUE3
    app.use(uvUI);
    // #endif
    
    return {
        app,
    }
}
