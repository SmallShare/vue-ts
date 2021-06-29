/* eslint-disable */
import component from "*.vue";
declare module 'App'
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
