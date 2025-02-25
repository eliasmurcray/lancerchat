import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import AppHeader from './components/AppHeader';
import './styles/global.sass';

const rootElement = document.getElementById('app-root');
if (rootElement === null) {
  throw new Error('Failed to render, #app-root not found.');
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <React.Fragment>
        <AppHeader />
        <Outlet />
      </React.Fragment>
    ),
    errorElement: (
      <React.Fragment>
        <AppHeader />
        <NotFound />
      </React.Fragment>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
