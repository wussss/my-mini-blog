declare var hljs: any

declare interface Window {
  [method: string]: () => void
}//声明window.xxx全局变量

type PromiseState = 'pending' | 'fulfilled' | 'rejected'
