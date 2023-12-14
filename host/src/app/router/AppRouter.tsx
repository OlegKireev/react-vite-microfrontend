import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

export const AppRouter = function AppRouter() {
  return (
    <Suspense fallback="Loading page...">
      <RouterProvider router={router} />
    </Suspense>
  );
};
