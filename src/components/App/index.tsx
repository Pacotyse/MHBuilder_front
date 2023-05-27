import { Route, Routes, useLocation } from 'react-router-dom';
import './styles.scss';
import { useEffect } from 'react';
import AppHeader from '../AppHeader';
import BuilderPage from '../../Pages/BuilderPage';
import HomePage from '../../Pages/HomePage';
import LoginPage from '../../Pages/LoginPage';
import ProfilePage from '../../Pages/ProfilePage';
import AppFooter from '../AppFooter';
import Loadouts from '../../Pages/LoadoutsPage';

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: 'smooth',
    });
  }, [location]);
  return (
    <div className="app">
      <AppHeader />
      {/* React router prevent the app from refreshing when navigating */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/builder" element={<BuilderPage />} />
        <Route path="/loadouts" element={<Loadouts />} />
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route path="/sign-in" element={<h2>Sign-in</h2>} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/copyrights" element={<h2>Copyrights</h2>} />
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
      <AppFooter />
    </div>
  );
}

export default App;
