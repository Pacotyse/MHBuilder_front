import { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import {
  clearArmorList,
  clearWeaponList, fetchArmorsByType,
} from '../../store/reducers/builder';
import AddItem from '../../components/AddItem';
import './styles.scss';
import getIconByKey from '../../utils/icons';
import WeaponTypeModal from '../../components/WeaponTypeModal';
import WeaponSelectionModal from '../../components/WeaponSelectionModal';
import ArmorSelectionModal from '../../components/ArmorSelectionModal';

function BuilderPage() {
  const dispatch = useAppDispatch();

  const [weaponTypeModalShown, setWeaponTypeModalShown] = useState(false);
  const [weaponSelectionModalShown, setWeaponSelectionModalShown] = useState(false);
  const [armorSelectionModalShown, setArmorSelectionModalShown] = useState(false);

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

      <section className="section-items">
        <p className="section-items__description">Set your items</p>
        <AddItem itemType="weapon" icon={getIconByKey('great_sword_1')} openModal={handleShowModal} />
        <AddItem itemType="head" icon={getIconByKey('head_1')} openModal={handleShowModal} />
        <AddItem itemType="chest" icon={getIconByKey('chest_1')} openModal={handleShowModal} />
        <AddItem itemType="waist" icon={getIconByKey('waist_1')} openModal={handleShowModal} />
        <AddItem itemType="arms" icon={getIconByKey('arms_1')} openModal={handleShowModal} />
        <AddItem itemType="legs" icon={getIconByKey('legs_1')} openModal={handleShowModal} />
      </section>

      <WeaponTypeModal
        weaponTypeModalShown={weaponTypeModalShown}
        setWeaponTypeModalShown={setWeaponTypeModalShown}
        showSelectionModal={() => setWeaponSelectionModalShown(!weaponSelectionModalShown)}
      />
      <WeaponSelectionModal
        weaponSelectionModalShown={weaponSelectionModalShown}
        setWeaponSelectionModalShown={setWeaponSelectionModalShown}
        setWeaponTypeModalShown={setWeaponTypeModalShown}
      />
      <ArmorSelectionModal
        armorSelectionModalShown={armorSelectionModalShown}
        setArmorSelectionModalShown={setArmorSelectionModalShown}
      />
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
