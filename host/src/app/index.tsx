import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';
import { AppNavigation } from '@/features/navigation';
import './theme/index.css';
import { Suspense } from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppNavigation />
        <Suspense fallback="Loading page...">
          <AppRouter />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
