import './styles.scss';
import logoBones from '../../assets/icons/bones.png';

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
              <a href="/" className="menu__link">Home</a>
            </li>
            <li>
              <a href="/builder" className="menu__link">Builder</a>
            </li>
            <li>
              <a href="/loadouts" className="menu__link">Loadouts</a>
            </li>
            <li>
              <a href="/users/12" className="menu__link ">
                <div className="menu__link-profile">
                  <img src={logoBones} alt="img" className="menu__link-profile__icon" />
                  <span>Profile</span>
                </div>
              </a>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;
