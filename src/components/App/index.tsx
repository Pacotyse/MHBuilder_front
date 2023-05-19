import { Route, Routes } from 'react-router-dom';
import './styles.scss';
import AppHeader from '../AppHeader';
import BuilderPage from '../../Pages/BuilderPage';
import HomePage from '../../Pages/HomePage';
import LoginPage from '../../Pages/LoginPage';
import ProfilePage from '../../Pages/ProfilePage';
import AppFooter from '../AppFooter';

function App() {
  return (
    <div className="app">
      <AppHeader />
      {/* React router prevent the app from refreshing when navigating */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/builder" element={<BuilderPage />} />
        <Route path="/loadouts" element={<h2>Loadouts</h2>} />
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route path="/sign-in" element={<h2>Sign-in</h2>} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
      <AppFooter />
    </div>
  );
}

export default App;
