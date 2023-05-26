import { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
import Modal from '../../components/Modal';
import {
  changeLoadoutCredentialsField, closeLoadoutPopUp, editLoadout, saveLoadout, setEditMode,
} from '../../store/reducers/loadout';
import PopUpMessage from '../../components/PopUpMessage';

function BuilderPage() {
  const dispatch = useAppDispatch();

  const [weaponTypeModalShown, setWeaponTypeModalShown] = useState(false);
  const [weaponSelectionModalShown, setWeaponSelectionModalShown] = useState(false);
  const [armorSelectionModalShown, setArmorSelectionModalShown] = useState(false);
  const [showSaveLoadoutModal, setShowSaveLoadoutModal] = useState(false);
  const [errorLoadout, setErrorLoadout] = useState<string>('');
  const [editLoadoutModalShown, setEditLoadoutModalShown] = useState(false);

  const weapon = useAppSelector((state) => state.builder.weapon);
  const arms = useAppSelector((state) => state.builder.arms);
  const head = useAppSelector((state) => state.builder.head);
  const chest = useAppSelector((state) => state.builder.chest);
  const legs = useAppSelector((state) => state.builder.legs);
  const waist = useAppSelector((state) => state.builder.waist);

  const loadoutPopUp = useAppSelector((state) => state.loadout.popUp);
  const userIsLogged = useAppSelector((state) => state.user.isLogged);
  const loadoutTitle = useAppSelector((state) => state.loadout.loadoutCredentials.title);
  // eslint-disable-next-line max-len
  const loadoutDescription = useAppSelector((state) => state.loadout.loadoutCredentials.description);
  const loadoutEdit = useAppSelector((state) => state.loadout.edit);

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

  const handleResetBuilder = () => {
    dispatch(resetBuilder());
    dispatch(setEditMode({
      isEditMode: false,
      editLoadoutId: '',
      title: '',
      description: '',
    }));
  };
  const handleShowSaveModal = () => {
    setErrorLoadout('');
    setShowSaveLoadoutModal(true);
  };

  // Get stats from the API on every builder update
  useEffect(() => {
    dispatch(getBuilderStats());
  }, [dispatch, weapon, arms, head, chest, legs, waist]);

  const handleSaveLoadout = () => {
    if (
      weapon
      && loadoutTitle
      && userIsLogged
    ) {
      dispatch(saveLoadout());
      dispatch(setEditMode({
        isEditMode: false,
        editLoadoutId: '',
        title: '',
        description: '',
      }));
      setShowSaveLoadoutModal(false);
    } else {
      setErrorLoadout('Make sure to set at least a weapon, set a title and be authentified to save a loadout.');
    }
  };

  const handleChangeField = (name: 'title' | 'description') => (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeLoadoutCredentialsField({
      value: event.target.value,
      field: name,
    }));
  };

  function handleCloseSaveLoadoutModal() {
    setShowSaveLoadoutModal(false);
  }

  function handleShowEditLoadoutModal(): void {
    setEditLoadoutModalShown(true);
    dispatch(changeLoadoutCredentialsField({ value: loadoutEdit.title, field: 'title' }));
    dispatch(changeLoadoutCredentialsField({ value: loadoutEdit.description, field: 'description' }));
  }
  function handleEditLoadout() {
    if (
      weapon
      && loadoutTitle
      && userIsLogged
    ) {
      dispatch(editLoadout(loadoutEdit.editLoadoutId));
      setEditLoadoutModalShown(false);
      dispatch(setEditMode({
        isEditMode: false,
        editLoadoutId: '',
        title: '',
        description: '',
      }));
      dispatch(resetBuilder());
    } else {
      setErrorLoadout('Make sure to set all the items and be authentified to save a loadout.');
    }
  }

  return (
    <main className="builder-main main">

      <PopUpMessage
        shown={loadoutPopUp.shown}
        message={loadoutPopUp.message}
        type={loadoutPopUp.type}
        close={() => dispatch(closeLoadoutPopUp())}
      />
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
        <button type="button" className="section-stats__button" onClick={handleShowSaveModal}>Save as new loadout</button>
        {loadoutEdit.isEditMode
          && (
          <button type="button" className="section-stats__button" onClick={handleShowEditLoadoutModal}>
            Save edit on loadout
            {' '}
            <span className="section-stats__button-edit__code">{loadoutEdit.editLoadoutId}</span>
          </button>
          )}
      </section>

      <Modal
        modalXl={false}
        shown={showSaveLoadoutModal}
        close={() => setShowSaveLoadoutModal(false)}
      >
        {Boolean(errorLoadout)
          && (
          <div>
            <p>{errorLoadout}</p>
            {!userIsLogged
              && (
              <Link
                to="/login"
                style={{
                  padding: '3px 6px',
                  backgroundColor: 'white',
                  color: 'black',
                  borderRadius: '10px',
                }}
              >
                Login
              </Link>
              )}
            <button type="button" onClick={() => setErrorLoadout('')}>Ok</button>
          </div>
          )}
        {Boolean(!errorLoadout)
          && (
          <div>

            <form>
              <input
                type="text"
                placeholder="Loadout title"
                required
                value={loadoutTitle}
                onChange={handleChangeField('title')}
              />
              <input
                type="text"
                placeholder="Description"
                value={loadoutDescription}
                onChange={handleChangeField('description')}
              />
            </form>
            <button type="button" onClick={handleSaveLoadout}>Save</button>
            <button type="button" onClick={handleCloseSaveLoadoutModal}>Cancel</button>
          </div>
          )}
      </Modal>
      <Modal
        modalXl={false}
        shown={editLoadoutModalShown}
        close={() => setEditLoadoutModalShown(false)}
      >
        {Boolean(errorLoadout)
          && (
          <div>
            <p>{errorLoadout}</p>
            <button type="button" onClick={() => setErrorLoadout('')}>Ok</button>
          </div>
          )}
        <div>
          <form>
            <input
              type="text"
              placeholder="Loadout title"
              required
              value={loadoutTitle}
              onChange={handleChangeField('title')}
            />
            <input
              type="text"
              placeholder="Description"
              value={loadoutDescription}
              onChange={handleChangeField('description')}
            />
          </form>
          <button type="button" onClick={handleEditLoadout}>Save</button>
          <button type="button" onClick={() => setEditLoadoutModalShown(false)}>Cancel</button>
        </div>
      </Modal>
    </main>
  );
}

export default BuilderPage;
