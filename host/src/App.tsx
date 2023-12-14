import { lazy, Suspense } from 'react';
const HomePage = lazy(() => import('homepage/App'));
const AboutPage = lazy(() => import('aboutpage/App'));

function App() {
  return (
    <div className="App">
      <h1>Host App</h1>
      <Suspense fallback="Loading homepage...">
        <HomePage />
        <AboutPage />
      </Suspense>
    </div>
  );
}

export default App;
