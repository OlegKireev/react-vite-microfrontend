import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from '../../router';
import { AppNavigation } from '@/features/navigation';
import { Suspense } from 'react';
import { Container } from '@/shared';
import '../../theme/global.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <AppNavigation />
        <Suspense fallback="Loading page...">
          <AppRouter />
        </Suspense>
      </Container>
    </BrowserRouter>
  );
};
