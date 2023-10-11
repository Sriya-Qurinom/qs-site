import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './components/Footer.tsx';
import Navbar from './components/Navbar.tsx';
import ErrorPage from './Error';
import './index.css';
import About from './pages/About';
import Blogs from './pages/Blog';
import Career from './pages/Career';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';

const Router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/services',
		element: <Services />,
	},
	{
		path: '/products',
		element: <Products />,
	},
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '/career',
		element: <Career />,
	},
	{
		path: '/blogs',
		element: <Blogs />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Navbar />
		<RouterProvider router={Router} />
		<Footer />
	</React.StrictMode>
);
