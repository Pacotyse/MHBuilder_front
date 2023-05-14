import { BiLoaderCircle } from 'react-icons/bi';
import Modal from '../Modal';
import { useAppSelector } from '../../hooks/redux';
import WeaponCard from '../Modal/WeaponCard';

interface WeaponSelectionModalProps {
  weaponSelectionModalShown: boolean
  setWeaponSelectionModalShown: (shown: boolean) => void
}

function WeaponSelectionModal(
  {
    weaponSelectionModalShown, setWeaponSelectionModalShown,
  }: WeaponSelectionModalProps,
) {
  const errorMessage = useAppSelector((state) => state.builder.errorMessage);
  const isLoading = useAppSelector((state) => state.builder.isLoading);
  const weaponList = useAppSelector((state) => state.builder.weaponList);

  return (
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
  );
}

export default WeaponSelectionModal;
