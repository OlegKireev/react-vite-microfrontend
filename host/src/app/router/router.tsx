import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Microfrontend routes
const HomePage = lazy(() => import('homepage/App'));
const AboutPage = lazy(() => import('aboutpage/App'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'about',
    element: <AboutPage />,
  },
]);
