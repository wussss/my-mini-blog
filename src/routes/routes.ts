import { TLazyComponentsKeys } from './lazyComponents'

const routes: IRoute[] = [
	{
		path: '/editor',
		exact: true,
		component: 'Editor'
	},
	{
		path: '/',
		exact: true,
		component: 'Frame',
		childRoutes: [
			{ path: '/', component: 'Home' },
			{ path: '/timeline', component: 'Home' },
			{ path: '/post/:id', component: 'Post' },
			{ path: '/settings', component: 'Settings' },
			{ path: '/editor/:id', component: 'Editor' },
		]
	}
]

export default routes

export interface IRoute {
	path: string  //路径
	exact?: boolean   //是否精准匹配
	component: TLazyComponentsKeys  // 地址匹配时呈现的组件
	childRoutes?: IRoute[]  //子路由
}
