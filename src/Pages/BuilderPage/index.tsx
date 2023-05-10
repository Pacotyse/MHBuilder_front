import AddItem from '../../components/AddItem';
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
import Modal from '../../components/Modal';
import WeaponType from '../../components/Modal/WeaponType';

function BuilderPage() {
  return (
    <main className="main">
      <h2>Builder</h2>
      <section className="section-items">
        <p className="section-items__description">Set your items</p>
        <AddItem item="weapon" icon={greatSword} />
        <AddItem item="helmet" icon={helmetIcon} />
        <AddItem item="chest" icon={chestIcon} />
        <AddItem item="waist" icon={waistIcon} />
        <AddItem item="gloves" icon={glovesIcon} />
        <AddItem item="feet" icon={feetIcon} />
      </section>
      <Modal modalXl={false} shown={false}>
        <WeaponType name="Bow" icon={bow1} />
        <WeaponType name="Bow Gun" icon={bowGun1} />
        <WeaponType name="Charge Blade" icon={chargeBlade} />
        <WeaponType name="Dual Blades" icon={dualBlades} />
        <WeaponType name="Great Sword" icon={greatSword} />
        <WeaponType name="Hammer" icon={hammer} />
        <WeaponType name="Heavy Bow Gun" icon={heavyBowGun} />
        <WeaponType name="Hunter Horn" icon={hunterHorn} />
        <WeaponType name="Insect Glaive" icon={insectGlaive} />
        <WeaponType name="Lance" icon={lance} />
        <WeaponType name="Lance Gun" icon={lanceGun} />
        <WeaponType name="Long Sword" icon={longSword} />
        <WeaponType name="Switch Axe" icon={switchAxe} />
        <WeaponType name="Sword & Shield" icon={swordShield} />
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
