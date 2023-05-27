import { Link } from 'react-router-dom';
import felyne_cook from '../../../public/felyne_cook.gif';
import './styles.scss';

function Err404() {
  return (
    <main className="main_404">
      <h2 className="err404__status">404</h2>
      <h3 className="err404__title">
        Wait... You&apos;ve reached the
        {' '}
        <span className="err404__title-campfire">campfire</span>!
      </h3>
      <div className="err404__gif">
        <p className="err404__gif-description">Well.. take a seat. This felyne cooked for us!</p>
        <img src={felyne_cook} alt="Felyne cooking a fish" />
      </div>

      <p>
        Eat this meal, but hurry up and go
        {' '}
        <Link to="/" className="err404__back-homepage">BACK ON MISSION</Link>
      </p>
    </main>
  );
}

export default Err404;
