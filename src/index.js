//src\index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/Error';
const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'products',
				element: <Products />,
			},
			{
				path: 'products/:id',
				element: <ProductDetail />,
			},
			{
				path: 'home',
				element: <Home />,
			},
		],
	},
	{
		path: '/app',
		element: <App />,
	},
]);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={router} />);
