import { lazy, Suspense } from 'react';
const HomePage = lazy(() => import('homepage/App'));

function App() {
  return (
    <div className="App">
      <h1>Host App</h1>
      <Suspense fallback="Loading homepage...">
        <HomePage />
      </Suspense>
    </div>
  );
}

export default App;
