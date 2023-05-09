// ReactDOM insert the app into the DOM
import ReactDOM from 'react-dom/client';
// Allows routing for the app
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './styles/index.scss';

// Create a root element for the app
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// On injecte notre application dans le DOM
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
