/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// enable div to be clicked

import './styles.scss';
import { useState } from 'react';
import { MdFileDownloadDone } from 'react-icons/md';

import getIconByKey from '../../../utils/icons';

function ArmorCard() {
  const [showExtra, setShowExtra] = useState(false);

  return (
    <div className="item-card" onClick={() => setShowExtra(!showExtra)}>
      <div className="item-card__header">
        <div className="item-card__header-identity">
          <img src={getIconByKey('head_1')} className="item__icon" alt="icon" />
          <div className="item-card__header-title">Armor Title</div>
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
          <div className="item-stats__value">967</div>
        </div>
        <div className="item-stats">
          <img src={getIconByKey('element_fire')} alt="fire icon" />
          <div className="item-stats__value">5</div>
        </div>
        <div className="item-stats">
          <img src={getIconByKey('element_ice')} alt="ice icon" />
          <div className="item-stats__value">7</div>
        </div>
        <div className="item-stats">
          <img src={getIconByKey('element_thunder')} alt="thunder icon" />
          <div className="item-stats__value">8</div>
        </div>
        <div className="item-stats">
          <img src={getIconByKey('element_water')} alt="water icon" />
          <div className="item-stats__value">-7</div>
        </div>
        <div className="item-stats">
          <img src={getIconByKey('element_dragon')} alt="dragon icon" />
          <div className="item-stats__value">3</div>
        </div>
      </div>
      <div className="item-card__footer">
        <div className="item-card__footer__skill-list">
          <div className="item-card__footer__skill-tag">Skill 1</div>
          <div className="item-card__footer__skill-tag">Skill 2</div>
          <div className="item-card__footer__skill-tag">Skill 3</div>
          <div className="item-card__footer__skill-tag">Skill 4</div>
          <div className="item-card__footer__skill-tag">Skill 5</div>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis blanditiis mollitia repellendus exercitationem! Eos, est. Odit fugit, illum a autem sapiente impedit adipisci laboriosam optio excepturi ratione doloremque est velit reprehenderit ducimus sunt animi!
        </div>
        )}
    </div>
  );
}

export default ArmorCard;
