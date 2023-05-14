import { useState } from 'react';
import { BiLoaderCircle } from 'react-icons/bi';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  clearArmorList,
  clearWeaponList, fetchArmorsByType, fetchWeaponsByType, setWeaponType,
} from '../../store/reducers/builder';
import AddItem from '../../components/AddItem';
import Modal from '../../components/Modal';
import WeaponType from '../../components/Modal/WeaponType';
import WeaponCard from '../../components/Modal/WeaponCard';
import './styles.scss';
import getIconByKey from '../../utils/icons';
import ArmorCard from '../../components/Modal/ArmorCard';

function BuilderPage() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.builder.isLoading);
  const weaponList = useAppSelector((state) => state.builder.weaponList);
  const armorList = useAppSelector((state) => state.builder.armorList);
  const errorMessage = useAppSelector((state) => state.builder.errorMessage);

  const [weaponTypeModalShown, setWeaponTypeModalShown] = useState(false);
  const [weaponSelectionModalShown, setWeaponSelectionModalShown] = useState(false);
  const [armorSelectionModalShown, setArmorSelectionModalShown] = useState(false);

  const handleClickOnWeaponType = (weaponType: string): void => {
    dispatch(setWeaponType(weaponType));
    dispatch(fetchWeaponsByType(weaponType));
    setWeaponTypeModalShown(!weaponTypeModalShown);
    setWeaponSelectionModalShown(!weaponSelectionModalShown);
  };

  const handleShowModal = (itemType: string) => {
    if (itemType === 'weapon') {
      // clear list of weapons
      dispatch(clearWeaponList());
      setWeaponTypeModalShown(!weaponTypeModalShown);
    } else {
      dispatch(clearArmorList());
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
          {isLoading && <BiLoaderCircle className="item-list__loader" />}
          {errorMessage && <div className="modal-error">{errorMessage}</div>}
          {
            weaponList && weaponList.map((weapon) => (
              <WeaponCard
                key={weapon.id}
                weapon={weapon}
                showModal={setWeaponSelectionModalShown}
              />
            ))
          }
        </div>
      </Modal>
      <Modal
        modalXl
        shown={armorSelectionModalShown}
        close={() => setArmorSelectionModalShown(!armorSelectionModalShown)}
      >
        <div className="item-list">
          {isLoading && <BiLoaderCircle className="item-list__loader" />}
          {errorMessage && <div className="modal-error">{errorMessage}</div>}
          {
            armorList && armorList.map((armor) => (
              <ArmorCard
                key={armor.id}
                armor={armor}
                showModal={setArmorSelectionModalShown}
              />
            ))
          }
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
