import { Route, Routes } from 'react-router-dom';
import reactLogo from '../../assets/react.svg';
import './styles.scss';

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Monster Hunter Builder</h1>
      {/* React router prevent the app from refreshing when navigating */}
      <Routes>
        <Route path="/" element={<h2>Accueil</h2>} />
        <Route path="/builder" element={<h2>Builder</h2>} />
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
