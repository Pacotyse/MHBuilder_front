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
import AttackStatsContainer from '../../components/AttackStats';
import ArmorStats from '../../components/ArmorStats';
import SkillStats from '../../components/SkillStats';

function BuilderPage() {
  const dispatch = useAppDispatch();

  const [weaponTypeModalShown, setWeaponTypeModalShown] = useState(false);
  const [weaponSelectionModalShown, setWeaponSelectionModalShown] = useState(false);
  const [armorSelectionModalShown, setArmorSelectionModalShown] = useState(false);

  const handleShowModal = (itemType: string) => {
    if (itemType === 'weapon') {
      // clear list of weapons
      dispatch(clearWeaponList());
      setArmorSelectionModalShown(false);
      setWeaponSelectionModalShown(false);
      setWeaponTypeModalShown(!weaponTypeModalShown);
    } else {
      dispatch(clearArmorList());
      setWeaponTypeModalShown(false);
      setWeaponSelectionModalShown(false);
      setArmorSelectionModalShown(!armorSelectionModalShown);
      dispatch(fetchArmorsByType(itemType));
    }
  };
  return (
    <main className="builder-main">

      <section className="section-items">
        <p className="section-items__description">Set your items</p>
        <AddItem itemType="weapon" icon={getIconByKey('great_sword_1')} openModal={handleShowModal} />
        <AddItem itemType="head" icon={getIconByKey('head_1')} openModal={handleShowModal} />
        <AddItem itemType="chest" icon={getIconByKey('chest_1')} openModal={handleShowModal} />
        <AddItem itemType="waist" icon={getIconByKey('waist_1')} openModal={handleShowModal} />
        <AddItem itemType="arms" icon={getIconByKey('arms_1')} openModal={handleShowModal} />
        <AddItem itemType="legs" icon={getIconByKey('legs_1')} openModal={handleShowModal} />
      </section>

      <section className="section-modal">
        <p className="section-modal__description">Choose an item</p>
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
      </section>
      <section className="section-stats">
        <AttackStatsContainer />
        <SkillStats />
        <ArmorStats />
      </section>
    </main>
  );
}

export default BuilderPage;
