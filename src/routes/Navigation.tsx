import { Suspense } from 'react';
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import logo from '../assets/react.svg';
import { routes } from './routes';

const Navigation = () => {
	return (
		<Suspense fallback={<span>Loading...</span>}>
			<BrowserRouter>
				<div className='main-layout'>
					<nav>
						<img src={logo} alt='React Logo' />
						<ul>
							{
								routes.map(({ to, name }) => (
									<li key={to} >
										<NavLink
											to={to}
											className={({ isActive }) => isActive ? 'nav-active' : ''}
										>
											{name}
										</NavLink>
									</li>
								))
							}
						</ul>
					</nav>

					<Routes>
						{
							routes.map(({ to, path, component: Component }) => (
								<Route
									key={to}
									path={path}
									element={<Component />}
								/>
							))
						}
						<Route
							path='/*'
							element={<Navigate to={routes[0].to} replace />}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</Suspense>
	)
}

export default Navigation