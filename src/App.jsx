import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { selectTheme } from './redux/selectors';

import { theme } from './styles/theme/theme';

import { HomePage } from './pages/HomePage/HomePage';
import { MainLayout } from './layout/MainLayout/MainLayout';

function App() {
  const selectedTheme = useSelector(selectTheme);

  return (
    <>
      <ThemeProvider theme={theme[selectedTheme ? 'dark' : 'light']}>
        <Suspense fallback={<span>Loading...</span>}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
            </Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
