/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// enable div to be clicked

import '../items.scss';
import './styles.scss';
import { useState } from 'react';
import { MdFileDownloadDone } from 'react-icons/md';
import getIconByKey, { IIcons } from '../../../utils/icons';
import { IWeapon } from '../../../@types/weapon';

interface WeaponCardProps {
  weapon: IWeapon
}
function WeaponCard({ weapon }: WeaponCardProps) {
  const weaponType = weapon.type.split('-').join('_');
  // set format to get the icon
  const weaponTypeIcon = `${weaponType}_1`;

  // when click on a weapon, shows extra information
  const [showExtra, setShowExtra] = useState(false);

  // get purcent of maximum sharpness

  return (
    <div className="item-card" onClick={() => setShowExtra(!showExtra)}>
      <div className="item-card__header">
        <div className="item-card__header-identity">
          <img src={getIconByKey(weaponTypeIcon as keyof IIcons)} className="item__icon" alt="icon" />
          <div className="item-card__header-title">{weapon.name}</div>
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
          <div className="item-stats__value">{weapon.attack}</div>
        </div>
        <div className="item-stats__other">
          <div className="item-stats">
            <img src={getIconByKey('affinity')} alt="affinity icon" />
            <div className="item-stats__value">{weapon.affinity}</div>
          </div>
          <div className="item-stats">
            <img src={getIconByKey('defense')} alt="defense icon" />
            <div className="item-stats__value">{weapon.defense_bonus}</div>
          </div>
        </div>
      </div>
      <div className="item-card__footer">
        <div className="sharpness">
          {/* checking if sharpness value is not null */}
          {weapon.sharpness.red
          && (
          <div
            className="sharpness-red"
            style={{
              // maximum sharpness on weapon is 250
              // Here we calculate the width purcent to fit the 150px container
              width: `${(weapon.sharpness.red / 250) * 100}%`,
            }}
          />
          )}
          {weapon.sharpness.orange
          && (
          <div
            className="sharpness-orange"
            style={{
              width: `${(weapon.sharpness.orange / 250) * 100}%`,
            }}
          />
          )}
          {weapon.sharpness.yellow
          && (
          <div
            className="sharpness-yellow"
            style={{
              width: `${(weapon.sharpness.yellow / 250) * 100}%`,
            }}
          />
          )}
          {weapon.sharpness.green
          && (
          <div
            className="sharpness-green"
            style={{
              width: `${(weapon.sharpness.green / 250) * 100}%`,
            }}
          />
          )}
          {weapon.sharpness.blue
          && (
          <div
            className="sharpness-blue"
            style={{
              width: `${(weapon.sharpness.blue / 250) * 100}%`,
            }}
          />
          )}
          {weapon.sharpness.white
          && (
          <div
            className="sharpness-white"
            style={{
              width: `${(weapon.sharpness.white / 250) * 100}%`,
            }}
          />
          )}
          {weapon.sharpness.purple
          && (
          <div
            className="sharpness-purple"
            style={{
              width: `${(weapon.sharpness.purple / 250) * 100}%`,
            }}
          />
          )}
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
