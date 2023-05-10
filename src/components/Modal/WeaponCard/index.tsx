import '../items.scss';
import './styles.scss';
import { useState } from 'react';
import greatSword from '../../../assets/icons/great-sword-1.png';
import decorationIcon from '../../../assets/icons/decoration.png';
import attackIcon from '../../../assets/icons/sub-attack.png';
import defenseIcon from '../../../assets/icons/sub-defense.png';
import affinityIcon from '../../../assets/icons/sub-affinity.png';

function WeaponCard() {
  const [showExtra, setShowExtra] = useState(false);

  return (
    <div className="item-card">
      <div className="item-card__header">
        <div className="item-card__header-identity">
          <img src={greatSword} className="item__icon" alt="icon" />
          <div className="item-card__header-title">Weapon Title</div>
        </div>
        <div className="item-card__header-decorations">
          <img src={decorationIcon} alt="decoration icon" />
          <img src={decorationIcon} alt="decoration icon" />
          <img src={decorationIcon} alt="decoration icon" />
        </div>
      </div>
      <div className="item-card__content">
        <div className="item-stats">
          <img src={attackIcon} alt="attack icon" />
          <div className="item-stats__value">320</div>
        </div>
        <div className="item-stats">
          <img src={affinityIcon} alt="affinity icon" />
          <div className="item-stats__value">20%</div>
        </div>
        <div className="item-stats">
          <img src={defenseIcon} alt="defense icon" />
          <div className="item-stats__value">30</div>
        </div>
      </div>
      <div className="item-card__footer">
        <div className="sharpness">
          <div className="sharpness-red" />
          <div className="sharpness-orange" />
          <div className="sharpness-yellow" />
          <div className="sharpness-green" />
          <div className="sharpness-blue" />
          <div className="sharpness-white" />
          <div className="sharpness-purple" />
        </div>
        <button type="button" className="item-card__button-add">Add</button>
      </div>
      {showExtra
        && (
        <div className="item-card__extra">
          {/* eslint-disable-next-line max-len */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis blanditiis mollitia repellendus exercitationem! Eos, est. Odit fugit, illum a autem sapiente impedit adipisci laboriosam optio excepturi ratione doloremque est velit reprehenderit ducimus sunt animi!
        </div>
        )}
    </div>
  );
}

export default WeaponCard;
