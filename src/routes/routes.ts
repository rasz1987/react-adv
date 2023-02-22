import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
	to: string
	path: string
	component: LazyExoticComponent<JSXComponent> | JSXComponent;
	name: string
}

const Lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2'))
const Lazy1 = lazy(() => import('../01-lazyload/pages/LazyPage1'))
const Lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3'))
const LazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'))

export const routes: Route[] = [
	{
		path: '/lazyload/*',
		to: '/lazyload',
		component: LazyLayout,
		name: 'LazyLayout - Dash'
	},
	{
		to: '/lazy2',
		path: 'lazy2',
		component: Lazy2,
		name: 'Lazy-2'
	},
	// {
	// 	to: '/lazy3',
	// 	path: 'lazy3',
	// 	component: Lazy3,
	// 	name: 'Lazy-3'
	// }
]