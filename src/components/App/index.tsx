import { Route, Routes } from 'react-router-dom';
import './styles.scss';
import AppHeader from '../AppHeader';
import BuilderPage from '../../Pages/BuilderPage';

function App() {
  return (
    <div className="app">
      <AppHeader />
      {/* React router prevent the app from refreshing when navigating */}
      <Routes>
        <Route path="/" element={<h2>Accueil</h2>} />
        <Route path="/builder" element={<BuilderPage />} />
        <Route path="/loadouts" element={<h2>Loadouts</h2>} />
        <Route path="/login" element={<h2>Login</h2>} />
        <Route path="/sign-in" element={<h2>Sign-in</h2>} />
        <Route path="/users/:id" element={<h2>Profile</h2>} />
        <Route path="*" element={<h2>404</h2>} />
      </Routes>

    </div>
  );
}

export default App;
