import { NavLink } from 'react-router-dom';
import logoBones from '../../assets/icons/bones.png';
import './styles.scss';

function AppHeader() {
  return (
    <header className="header">
      <div className="header__main">
        <div className="header__title-container">
          <img src={logoBones} alt="logo" className="header__logo" />
          <h1 className="header__title">Monster Hunter Builder</h1>
        </div>
        <button type="button" className="header__button-menu">
          <span />
          <span />
          <span />
        </button>
        <nav className="menu is-active">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'menu__link menu-active' : 'menu__link')}
              >
                Home

              </NavLink>
            </li>
            <li>
              <NavLink
                to="/builder"
                className={({ isActive }) => (isActive ? 'menu__link menu-active' : 'menu__link')}
              >
                Builder
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/loadouts"
                className={({ isActive }) => (isActive ? 'menu__link menu-active' : 'menu__link')}
              >
                Loadouts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users/12"
                className={({ isActive }) => (isActive ? 'menu__link menu-active' : 'menu__link')}
              >
                <div className="menu__link-profile">
                  <img src={logoBones} alt="img" className="menu__link-profile__icon" />
                  <span>Profile</span>
                </div>
              </NavLink>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;
