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
import { useAppDispatch } from '../../../hooks/redux';
import { setBuilderWeapon } from '../../../store/reducers/builder';
import { setSharpness } from '../../../utils/weapon';

interface WeaponCardProps {
  weapon: IWeapon
  showModal: (shown: boolean) => void
}
function WeaponCard({ weapon, showModal }: WeaponCardProps) {
  const dispatch = useAppDispatch();
  const weaponType = weapon.type.split('-').join('_');
  // set format to get the icon
  const weaponTypeIcon = `${weaponType}_1`;

  // when click on a weapon, shows extra information
  const [showExtra, setShowExtra] = useState(false);

  function handleSetWeapon(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.stopPropagation();
    dispatch(setBuilderWeapon(weapon));
    showModal(false);
  }

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
          {/* first checking if sharpness value is not null */}
          {weapon.sharpness.red
            && (
              // Then set the width of the sharpness
              <div className="sharpness-red" style={{ width: setSharpness(weapon.sharpness.red) }} />
            )}
          {weapon.sharpness.orange
          && (
          <div className="sharpness-orange" style={{ width: setSharpness(weapon.sharpness.orange) }} />
          )}
          {weapon.sharpness.yellow
          && (
          <div className="sharpness-yellow" style={{ width: setSharpness(weapon.sharpness.yellow) }} />
          )}
          {weapon.sharpness.green
          && (<div className="sharpness-green" style={{ width: setSharpness(weapon.sharpness.green) }} />
          )}
          {weapon.sharpness.blue
          && (<div className="sharpness-blue" style={{ width: setSharpness(weapon.sharpness.blue) }} />
          )}
          {weapon.sharpness.white
          && (<div className="sharpness-white" style={{ width: setSharpness(weapon.sharpness.white) }} />
          )}
          {weapon.sharpness.purple
          && (<div className="sharpness-purple" style={{ width: setSharpness(weapon.sharpness.purple) }} />
          )}
        </div>
        <button type="button" className="item-card__button-add" onClick={handleSetWeapon}>
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
