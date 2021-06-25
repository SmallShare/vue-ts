/* eslint-disable */
import component from "*.vue";

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
import {useRoute} from 'vue-router'
declare module 'vue/types/vue' {
    interface Vue {
        $router: useRoute
    }
    export default component
}
