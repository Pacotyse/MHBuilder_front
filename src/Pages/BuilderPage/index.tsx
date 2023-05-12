import { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { fetchArmorsByType, fetchWeaponsByType, setWeaponType } from '../../store/reducers/builder';
import AddItem from '../../components/AddItem';
import Modal from '../../components/Modal';
import WeaponType from '../../components/Modal/WeaponType';
import WeaponCard from '../../components/Modal/WeaponCard';
import './styles.scss';
import getIconByKey from '../../utils/icons';
import ArmorCard from '../../components/Modal/ArmorCard';

function BuilderPage() {
  const dispatch = useAppDispatch();

  const [weaponTypeModalShown, setWeaponTypeModalShown] = useState(false);
  const [weaponSelectionModalShown, setWeaponSelectionModalShown] = useState(false);
  const [armorSelectionModalShown, setArmorSelectionModalShown] = useState(false);

  const handleClickOnWeaponType = (weapon: string): void => {
    dispatch(setWeaponType(weapon));
    dispatch(fetchWeaponsByType(weapon));
    setWeaponTypeModalShown(!weaponTypeModalShown);
    setWeaponSelectionModalShown(!weaponSelectionModalShown);
  };

  const handleShowModal = (itemType: string) => {
    if (itemType === 'weapon') {
      setWeaponTypeModalShown(!weaponTypeModalShown);
    } else {
      setArmorSelectionModalShown(!armorSelectionModalShown);
      dispatch(fetchArmorsByType(itemType));
    }
  };
  return (
    <main className="main">
      <h2>Builder</h2>
      <section className="section-items">
        <p className="section-items__description">Set your items</p>
        <AddItem itemType="weapon" icon={getIconByKey('great_sword_1')} openModal={handleShowModal} />
        <AddItem itemType="head" icon={getIconByKey('head_1')} openModal={handleShowModal} />
        <AddItem itemType="chest" icon={getIconByKey('chest_1')} openModal={handleShowModal} />
        <AddItem itemType="waist" icon={getIconByKey('waist_1')} openModal={handleShowModal} />
        <AddItem itemType="arms" icon={getIconByKey('arms_1')} openModal={handleShowModal} />
        <AddItem itemType="legs" icon={getIconByKey('legs_1')} openModal={handleShowModal} />
      </section>
      <Modal
        modalXl={false}
        shown={weaponTypeModalShown}
        close={() => setWeaponTypeModalShown(!weaponTypeModalShown)}
      >
        <WeaponType name="Bow" icon={getIconByKey('bow_1')} openSelectionModal={handleClickOnWeaponType} />
        <WeaponType name="Bow Gun" icon={getIconByKey('bow_gun_1')} openSelectionModal={handleClickOnWeaponType} />
        <WeaponType name="Charge Blade" icon={getIconByKey('charge_blade_1')} openSelectionModal={handleClickOnWeaponType} />
        <WeaponType name="Dual Blades" icon={getIconByKey('dual_blades_1')} openSelectionModal={handleClickOnWeaponType} />
        <WeaponType name="Great Sword" icon={getIconByKey('great_sword_1')} openSelectionModal={handleClickOnWeaponType} />
        <WeaponType name="Hammer" icon={getIconByKey('hammer_1')} openSelectionModal={handleClickOnWeaponType} />
        <WeaponType name="Heavy Bow Gun" icon={getIconByKey('heavy_bow_gun_1')} openSelectionModal={handleClickOnWeaponType} />
        <WeaponType name="Hunter Horn" icon={getIconByKey('hunter_horn_1')} openSelectionModal={handleClickOnWeaponType} />
        <WeaponType name="Insect Glaive" icon={getIconByKey('insect_glaive_1')} openSelectionModal={handleClickOnWeaponType} />
        <WeaponType name="Lance" icon={getIconByKey('lance_1')} openSelectionModal={handleClickOnWeaponType} />
        <WeaponType name="Lance Gun" icon={getIconByKey('lance_gun_1')} openSelectionModal={handleClickOnWeaponType} />
        <WeaponType name="Long Sword" icon={getIconByKey('long_sword_1')} openSelectionModal={handleClickOnWeaponType} />
        <WeaponType name="Switch Axe" icon={getIconByKey('switch_axe_1')} openSelectionModal={handleClickOnWeaponType} />
        <WeaponType name="Sword and Shield" icon={getIconByKey('sword_and_shield_1')} openSelectionModal={handleClickOnWeaponType} />
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
        <Modal modalXl shown close={() => setArmorSelectionModalShown(!armorSelectionModalShown)}>
          <div className="item-list">
            <ArmorCard />
            <ArmorCard />
            <ArmorCard />
            <ArmorCard />
            <ArmorCard />
            <ArmorCard />
          </div>
        </Modal>

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
