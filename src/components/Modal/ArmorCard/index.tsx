/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// enable div to be clicked

import './styles.scss';
import { useState } from 'react';
import { MdFileDownloadDone } from 'react-icons/md';

import getIconByKey, { IIcons } from '../../../utils/icons';
import { IArmor } from '../../../@types/armor';
import { useAppDispatch } from '../../../hooks/redux';
import { setBuilderArmor } from '../../../store/reducers/builder';

interface ArmorCardProps {
  armor: IArmor
}
function ArmorCard({ armor }: ArmorCardProps) {
  const dispatch = useAppDispatch();
  const [showExtra, setShowExtra] = useState(false);
  const armorType = armor.type;
  // set the right format to get the icon
  const armorTypeIcon = `${armorType}_1`;

  function handleSetArmor(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.stopPropagation();
    dispatch(setBuilderArmor(armor));
  }

  return (
    <div className="item-card" onClick={() => setShowExtra(!showExtra)}>
      <div className="item-card__header">
        <div className="item-card__header-identity">
          <img src={getIconByKey(armorTypeIcon as keyof IIcons)} className="item__icon" alt="icon" />
          <div className="item-card__header-title">{armor.name}</div>
        </div>
        <div className="item-card__header-decorations">
          <img src={getIconByKey('decoration_1')} alt="decoration icon" />
          <img src={getIconByKey('decoration_1')} alt="decoration icon" />
          <img src={getIconByKey('decoration_1')} alt="decoration icon" />
        </div>
      </div>
      <div className="item-card__content">
        <div className="item-stats">
          <img src={getIconByKey('defense')} alt="defense icon" />
          <div className="item-stats__value">{armor.defense}</div>
        </div>
        <div className="item-stats__other">
          <div className="item-stats">
            <img src={getIconByKey('element_fire')} alt="fire icon" />
            <div className="item-stats__value">{armor.resistances.fire}</div>
          </div>
          <div className="item-stats">
            <img src={getIconByKey('element_ice')} alt="ice icon" />
            <div className="item-stats__value">{armor.resistances.ice}</div>
          </div>
          <div className="item-stats">
            <img src={getIconByKey('element_thunder')} alt="thunder icon" />
            <div className="item-stats__value">{armor.resistances.thunder}</div>
          </div>
          <div className="item-stats">
            <img src={getIconByKey('element_water')} alt="water icon" />
            <div className="item-stats__value">{armor.resistances.water}</div>
          </div>
          <div className="item-stats">
            <img src={getIconByKey('element_dragon')} alt="dragon icon" />
            <div className="item-stats__value">{armor.resistances.dragon}</div>
          </div>
        </div>
      </div>
      <div className="item-card__footer">
        <div className="item-card__footer__skill-list">
          {armor.skills.map((skill) => <div key={skill.name} className="item-card__footer__skill-tag">{skill.name}</div>)}
        </div>
        <button type="button" className="item-card__button-add" onClick={handleSetArmor}>
          Set
          {' '}
          <MdFileDownloadDone />
        </button>
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

export default ArmorCard;
