import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { PageErrorMessage } from './PageErrorMessage';

// Microfrontend routes
const HomePage = lazy(() => import('homepage/App'));
const AboutPage = lazy(() => import('aboutpage/App'));

export const AppRouter = () => {
  return (
    <ErrorBoundary fallback={<PageErrorMessage />}>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/about"
          element={<AboutPage />}
        />
      </Routes>
    </ErrorBoundary>
  );
};
