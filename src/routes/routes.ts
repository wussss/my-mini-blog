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
			{ path: '/user/:id', component: 'User' },
			{ path: '/user/:id/:item', component: 'User' }
		]
	}
]

export default routes

export interface IRoute {
	path: string
	exact?: boolean
	component: TLazyComponentsKeys
	childRoutes?: IRoute[]
}
