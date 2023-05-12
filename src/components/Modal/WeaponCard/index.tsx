/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// enable div to be clicked

import '../items.scss';
import './styles.scss';
import { useState } from 'react';
import { MdFileDownloadDone } from 'react-icons/md';
import { useAppSelector } from '../../../hooks/redux';

import getIconByKey, { IIcons } from '../../../utils/icons';

function WeaponCard() {
  const weaponType = useAppSelector((state) => state.builder.weaponType);
  // set format to get the icon
  const weaponTypeIcon = `${weaponType}_1`;

  // when click on a weapon, shows extra information
  const [showExtra, setShowExtra] = useState(false);
  return (
    <div className="item-card" onClick={() => setShowExtra(!showExtra)}>
      <div className="item-card__header">
        <div className="item-card__header-identity">
          <img src={getIconByKey(weaponTypeIcon as keyof IIcons)} className="item__icon" alt="icon" />
          <div className="item-card__header-title">Weapon Title</div>
        </div>
        <div className="item-card__header-decorations">
          <img src={getIconByKey('decoration_1')} alt="decoration icon" />
          <img src={getIconByKey('decoration_1')} alt="decoration icon" />
          <img src={getIconByKey('decoration_1')} alt="decoration icon" />
        </div>
      </div>
      <div className="item-card__content">
        <div className="item-stats">
          <img src={getIconByKey('attack')} alt="attack icon" />
          <div className="item-stats__value">320</div>
        </div>
        <div className="item-stats">
          <img src={getIconByKey('affinity')} alt="affinity icon" />
          <div className="item-stats__value">20%</div>
        </div>
        <div className="item-stats">
          <img src={getIconByKey('defense')} alt="defense icon" />
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
        <button type="button" className="item-card__button-add" onClick={(event) => event.stopPropagation()}>
          Set
          {' '}
          <MdFileDownloadDone />

        </button>
      </div>
      {showExtra
        && (
        <div className="item-card__extra">
          {/* eslint-disable-next-line max-len */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis blanditiis mollitia repellendus exercitationem! Eos, est. Odit fugit, illum a autem sapiente impedit adipisci reprehenderit ducimus sunt animi!
        </div>
        )}
    </div>
  );
}

export default WeaponCard;
