import { ILoadout } from '../../@types/loadout';
import getIconByKey, { IIcons } from '../../utils/icons';
import './styles.scss';

interface LoadoutProps {
  loadout: ILoadout
}
function Loadout({ loadout }: LoadoutProps) {
  return (
    <li className="loadout-container">
      <div className="loadout__main">
        <div className="loadout__header">
          <img src={getIconByKey(`${loadout.weapon.type.split('-').join('_')}_1` as keyof IIcons)} className="loadout__weapon-icon" alt="icon" />
          <div className="loadout__header-identity">
            <div className="loadout__header-title">{loadout.name}</div>
            <span className="loadout-author">Author</span>
            <p className="loadout-description">{loadout.description}</p>
          </div>
        </div>

        <div className="loadout__footer">
          <ul className="loadout__footer__skill-list">
            <li className="loadout__footer__skill-tag">skill</li>
            <li className="loadout__footer__skill-tag">skill +</li>
            <li className="loadout__footer__skill-tag">skill mieux</li>
            <li className="loadout__footer__skill-tag">skill bis</li>
            <li className="loadout__footer__skill-tag">skill encore</li>
          </ul>
        </div>

      </div>

      <div className="loadout-aside">
        <div className="loadout__stats">
          <img src={getIconByKey('attack')} alt="attack icon" className="loadout__stats-icon" />
          <div className="loadout__stats-value">210</div>
        </div>
        <div className="loadout__stats">
          <img src={getIconByKey('affinity')} alt="affinity icon" className="loadout__stats-icon" />
          <div className="loadout__value">
            {loadout.weapon.affinity}
            %
          </div>
        </div>
        <div className="loadout__stats">
          <img src={getIconByKey('element_thunder')} alt="thunder icon" className="loadout__stats-icon" />
          <div className="loadout__value">140</div>
        </div>
        <div className="loadout__stats">
          <img src={getIconByKey('defense')} alt="defense icon" className="loadout__stats-icon" />
          <div className="loadout__value">413</div>
        </div>
        <div className="loadout__sharpness">sharpness</div>
      </div>

    </li>
  );
}

export default Loadout;
