import { useState } from 'react';
import AddItem from '../../components/AddItem';
import Modal from '../../components/Modal';
import WeaponType from '../../components/Modal/WeaponType';
import WeaponCard from '../../components/Modal/WeaponCard';
import helmetIcon from '../../assets/icons/helmet-1.png';
import chestIcon from '../../assets/icons/chest-1.png';
import waistIcon from '../../assets/icons/waist-1.png';
import glovesIcon from '../../assets/icons/gloves-1.png';
import feetIcon from '../../assets/icons/feet-1.png';
import bow1 from '../../assets/icons/bow-1.png';
import bowGun1 from '../../assets/icons/bow-gun-1.png';
import chargeBlade from '../../assets/icons/charge-blade-1.png';
import dualBlades from '../../assets/icons/dual-blades-1.png';
import greatSword from '../../assets/icons/great-sword-1.png';
import hammer from '../../assets/icons/hammer-1.png';
import heavyBowGun from '../../assets/icons/heavy-bow-gun-1.png';
import hunterHorn from '../../assets/icons/hunter-horn-1.png';
import insectGlaive from '../../assets/icons/insect-glaive-1.png';
import lance from '../../assets/icons/lance-1.png';
import lanceGun from '../../assets/icons/lance-gun-1.png';
import longSword from '../../assets/icons/long-sword-1.png';
import switchAxe from '../../assets/icons/switch-axe-1.png';
import swordShield from '../../assets/icons/sword-shield-1.png';
import './styles.scss';

function BuilderPage() {
  const [weaponTypeModalShown, setWeaponTypeModalShown] = useState(false);
  const [weaponSelectionModalShown, setWeaponSelectionModalShown] = useState(false);
  const [armorSelectionModalShown, setArmorSelectionModalShown] = useState(false);

  const handleClickOnWeaponType = (weapon: string): void => {
    setWeaponTypeModalShown(!weaponTypeModalShown);
    setWeaponSelectionModalShown(!weaponSelectionModalShown);
  };

  return (
    <main className="main">
      <h2>Builder</h2>
      <section className="section-items">
        <p className="section-items__description">Set your items</p>
        <AddItem item="weapon" icon={greatSword} openModal={() => setWeaponTypeModalShown(!weaponTypeModalShown)} />
        <AddItem item="helmet" icon={helmetIcon} openModal={() => setArmorSelectionModalShown(!armorSelectionModalShown)} />
        <AddItem item="chest" icon={chestIcon} openModal={() => setArmorSelectionModalShown(!armorSelectionModalShown)} />
        <AddItem item="waist" icon={waistIcon} openModal={() => setArmorSelectionModalShown(!armorSelectionModalShown)} />
        <AddItem item="gloves" icon={glovesIcon} openModal={() => setArmorSelectionModalShown(!armorSelectionModalShown)} />
        <AddItem item="feet" icon={feetIcon} openModal={() => setArmorSelectionModalShown(!armorSelectionModalShown)} />
      </section>
      <Modal
        modalXl={false}
        shown={weaponTypeModalShown}
        close={() => setWeaponTypeModalShown(!weaponTypeModalShown)}
      >
        <WeaponType name="Bow" icon={bow1} openSelectionModal={handleClickOnWeaponType} />
        <WeaponType name="Bow Gun" icon={bowGun1} openSelectionModal={handleClickOnWeaponType} />
        <WeaponType name="Charge Blade" icon={chargeBlade} openSelectionModal={handleClickOnWeaponType} />
        <WeaponType name="Dual Blades" icon={dualBlades} openSelectionModal={handleClickOnWeaponType} />
        <WeaponType name="Great Sword" icon={greatSword} openSelectionModal={handleClickOnWeaponType} />
        <WeaponType name="Hammer" icon={hammer} openSelectionModal={handleClickOnWeaponType} />
        <WeaponType name="Heavy Bow Gun" icon={heavyBowGun} openSelectionModal={handleClickOnWeaponType} />
        <WeaponType name="Hunter Horn" icon={hunterHorn} openSelectionModal={handleClickOnWeaponType} />
        <WeaponType name="Insect Glaive" icon={insectGlaive} openSelectionModal={handleClickOnWeaponType} />
        <WeaponType name="Lance" icon={lance} openSelectionModal={handleClickOnWeaponType} />
        <WeaponType name="Lance Gun" icon={lanceGun} openSelectionModal={handleClickOnWeaponType} />
        <WeaponType name="Long Sword" icon={longSword} openSelectionModal={handleClickOnWeaponType} />
        <WeaponType name="Switch Axe" icon={switchAxe} openSelectionModal={handleClickOnWeaponType} />
        <WeaponType name="Sword & Shield" icon={swordShield} openSelectionModal={handleClickOnWeaponType} />
      </Modal>
      <Modal
        modalXl
        shown={weaponSelectionModalShown}
        close={() => setWeaponSelectionModalShown(!weaponSelectionModalShown)}
      >
        <div className="item-list">
          {/* here : map on [data] */}
          <WeaponCard />
          <WeaponCard />
          <WeaponCard />
          <WeaponCard />
          <WeaponCard />
          <WeaponCard />
        </div>
      </Modal>
      <section className="section-stats">
        <div className="stats-container">
          Weapon
        </div>
        {/* armor infos */}
        <div className="stats-container">Armor</div>
        {/* skills infos */}
        <div className="stats-container">
          <ul className="stats-content__skills">
            <li>
              <span>Skill name</span>
              <div>level ***</div>
            </li>
            <li>
              <span>Skill name</span>
              <div>level ***</div>
            </li>
            <li>
              <span>Skill name</span>
              <div>level ***</div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default BuilderPage;
