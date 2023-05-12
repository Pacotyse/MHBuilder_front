import '../items.scss';
import './styles.scss';
import { useState } from 'react';
import chest from '../../../assets/icons/chest-1.png';
import decorationIcon from '../../../assets/icons/decoration.png';
import fireIcon from '../../../assets/icons/element-fire.png';
import iceIcon from '../../../assets/icons/element-ice.png';
import thunderIcon from '../../../assets/icons/element-thunder.png';
import waterIcon from '../../../assets/icons/element-water.png';
import dragonIcon from '../../../assets/icons/element-dragon.png';
import defenseIcon from '../../../assets/icons/sub-defense.png';

function ArmorCard() {
  const [showExtra, setShowExtra] = useState(false);

  return (
    <div className="item-card">
      <div className="item-card__header">
        <div className="item-card__header-identity">
          <img src={chest} className="item__icon" alt="icon" />
          <div className="item-card__header-title">Armor Title</div>
        </div>
        <div className="item-card__header-decorations">
          <img src={decorationIcon} alt="decoration icon" />
          <img src={decorationIcon} alt="decoration icon" />
          <img src={decorationIcon} alt="decoration icon" />
        </div>
      </div>
      <div className="item-card__content">
        <div className="item-stats">
          <img src={defenseIcon} alt="defense icon" />
          <div className="item-stats__value">967</div>
        </div>
        <div className="item-stats">
          <img src={fireIcon} alt="fire icon" />
          <div className="item-stats__value">5</div>
        </div>
        <div className="item-stats">
          <img src={iceIcon} alt="ice icon" />
          <div className="item-stats__value">7</div>
        </div>
        <div className="item-stats">
          <img src={thunderIcon} alt="thunder icon" />
          <div className="item-stats__value">8</div>
        </div>
        <div className="item-stats">
          <img src={waterIcon} alt="water icon" />
          <div className="item-stats__value">-7</div>
        </div>
        <div className="item-stats">
          <img src={dragonIcon} alt="dragon icon" />
          <div className="item-stats__value">3</div>
        </div>
      </div>
      <div className="item-card__footer">
        <div className="item-card__skills">
          <button type="button" className="item-card__skills">skill 1</button>
        </div>
        <div className="item-card__skills">
          <button type="button" className="item-card__skills">skill 2</button>
        </div>
        <div className="item-card__skills">
          <button type="button" className="item-card__skills">skill 3</button>
        </div>
        <div className="item-card__skills">
          <button type="button" className="item-card__skills">skill 4</button>
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

export default ArmorCard;
