import { ReactNode, useState } from 'react';
import cn from 'classnames';
import { MdContentCopy } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';
import { IIcons } from '../../@types/icons';
import { ILoadout } from '../../@types/loadout';
import getIconByKey from '../../utils/icons';
import './styles.scss';
import Modal from '../Modal';
import { useAppDispatch } from '../../hooks/redux';
import { deleteLoadout, fetchUserLoadouts } from '../../store/reducers/loadout';

interface LoadoutProps {
  loadout: ILoadout
  isOnProfilePage: boolean
}
function Loadout({ loadout, isOnProfilePage }: LoadoutProps) {
  const dispatch = useAppDispatch();

  const [clicked, setClicked] = useState(false);
  const [deleteLoadoutModalShown, setDeleteLoadoutModalShown] = useState(false);
  const copyButtonClassnames = cn('loadout-code__copy-button', {
    clicked,
  });

  function handleDeleteLoadout(): void {
    dispatch(deleteLoadout(loadout.id));
    setDeleteLoadoutModalShown(false);
    dispatch(fetchUserLoadouts());
  }

  return (
    <li className="loadout-container">
      <div className="loadout__main">
        <div className="loadout__header">
          <img src={getIconByKey(`${loadout.weapon.type.split('-').join('_')}_1` as keyof IIcons)} className="loadout__weapon-icon" alt="icon" />
          <div className="loadout__header-identity">
            <div className="loadout__header-title">{loadout.name}</div>
            <span className="loadout-author">{loadout.user_id}</span>
            <div className="loadout-code">
              <p className="loadout-code__description">{`Code: ${loadout.id}`}</p>
              {/* button below can copy loadout code to clipboard */}
              <button
                type="button"
                className={copyButtonClassnames}
                onClick={() => navigator.clipboard.writeText(loadout.id)}
                onMouseDown={() => setClicked(true)}
                onMouseUp={() => setClicked(false)}
              >
                <MdContentCopy />
              </button>
            </div>
            <p className="loadout-description">{`Note: " ${loadout.description} "`}</p>
          </div>
        </div>

        <div className="loadout__footer">
          <ul className="loadout__footer__skill-list">
            <li className="loadout__footer__skill-tag">skill</li>
            <li className="loadout__footer__skill-tag">skill +</li>
            <li className="loadout__footer__skill-tag">skill mieux</li>
            <li className="loadout__footer__skill-tag">skill bis</li>
            <li className="loadout__footer__skill-tag">skill encore</li>
          </ul>
        </div>

      </div>

      <div className="loadout-aside">
        <div className="loadout__stats">
          <img src={getIconByKey('attack')} alt="attack icon" className="loadout__stats-icon" />
          <div className="loadout__stats-value">210</div>
        </div>
        <div className="loadout__stats">
          <img src={getIconByKey('affinity')} alt="affinity icon" className="loadout__stats-icon" />
          <div className="loadout__value">
            {loadout.weapon.affinity}
            %
          </div>
        </div>
        <div className="loadout__stats">
          <img src={getIconByKey('element_thunder')} alt="thunder icon" className="loadout__stats-icon" />
          <div className="loadout__value">140</div>
        </div>
        <div className="loadout__stats">
          <img src={getIconByKey('defense')} alt="defense icon" className="loadout__stats-icon" />
          <div className="loadout__value">413</div>
        </div>
        <div className="loadout__sharpness">sharpness</div>
      </div>
      {isOnProfilePage
        && (
          <button type="button" className="loadout__delete" onClick={() => setDeleteLoadoutModalShown(true)}>
            <FiTrash2 className="loadout__delete-icon" />
          </button>
        )}
      <Modal
        modalXl={false}
        shown={deleteLoadoutModalShown}
        close={() => setDeleteLoadoutModalShown(false)}
      >
        <div className="profile__modal-content">
          <p className="profile__modal-text">
            Do you confirm deletion of loadout &quot;
            {loadout.name}
            &quot; ?
          </p>
          <div className="profile__modal-confirm">
            <button type="button" className="profile__modal__button-delete" onClick={handleDeleteLoadout}>Delete</button>
            <button type="button" className="profile__modal__button-cancel" onClick={() => setDeleteLoadoutModalShown(false)}>Cancel</button>
          </div>
        </div>
      </Modal>
    </li>
  );
}

export default Loadout;
