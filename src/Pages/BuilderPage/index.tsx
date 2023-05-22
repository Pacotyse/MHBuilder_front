import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  clearArmorList,
  clearWeaponList, fetchArmorsByType, getBuilderStats, resetBuilder,
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
import { IArmorType } from '../../@types/armor';

function BuilderPage() {
  const dispatch = useAppDispatch();

  const [weaponTypeModalShown, setWeaponTypeModalShown] = useState(false);
  const [weaponSelectionModalShown, setWeaponSelectionModalShown] = useState(false);
  const [armorSelectionModalShown, setArmorSelectionModalShown] = useState(false);

  const weapon = useAppSelector((state) => state.builder.weapon);
  const arms = useAppSelector((state) => state.builder.arms);
  const head = useAppSelector((state) => state.builder.head);
  const chest = useAppSelector((state) => state.builder.chest);
  const legs = useAppSelector((state) => state.builder.legs);
  const waist = useAppSelector((state) => state.builder.waist);

  const handleShowModal = (itemType: 'weapon' | IArmorType) => {
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

  function handleResetBuilder(): void {
    dispatch(resetBuilder());
  }

  // Get stats from the API on every builder update
  useEffect(() => {
    dispatch(getBuilderStats());
  }, [dispatch, weapon, arms, head, chest, legs, waist]);

  return (
    <main className="builder-main main">

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
        <button type="button" className="section-stats__button" onClick={handleResetBuilder}>Reset builder</button>
        <button type="button" className="section-stats__button">Save and share this loadout</button>
      </section>
    </main>
  );
}

export default BuilderPage;
