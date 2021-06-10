import { TLazyComponentsKeys } from './lazyComponents'

export interface IRoute {
  path: string //路径
  exact?: boolean //是否精准匹配
  component: TLazyComponentsKeys // 地址匹配时呈现的组件
  childRoutes?: IRoute[] //子路由
}
const routes: IRoute[] = [
  {
    path: '/editor',
    exact: true,
    component: 'Editor',
  },
  {
    path: '/editor/:id',
    exact: false,
    component: 'Editor',
  },
  {
    path: '/',
    exact: true,
    component: 'Main',
    childRoutes: [
      { path: '/', component: 'ArticleList' },
      { path: '/detail/:id', component: 'Detail' },
      { path: '/setting', component: 'Setting' },
    ],
  },
]
export default routes
