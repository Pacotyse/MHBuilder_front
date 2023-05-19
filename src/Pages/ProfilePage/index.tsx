import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { BiLoaderCircle } from 'react-icons/bi';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { deleteUser, logout } from '../../store/reducers/user';
import './styles.scss';
import getIconByKey from '../../utils/icons';
import Modal from '../../components/Modal';
import { fetchLoadouts } from '../../store/reducers/loadout';
import Loadout from '../../components/Loadout';

function ProfilePage() {
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const username = useAppSelector((state) => state.user.username);
  const loadouts = useAppSelector((state) => state.loadout.loadouts);
  const isLoading = useAppSelector((state) => state.loadout.isLoading);

  const [showSettings, setShowSettings] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleDeleteUser = () => {
    dispatch(deleteUser());
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  const handleEditUser = () => {
    // to create user reducer action PUT
  };

  const handleCloseModal = () => {
    setShowConfirmModal(false);
    setShowSettings(false);
  };

  // Automatic fetch loadouts when reach /profile
  useEffect(() => {
    dispatch(fetchLoadouts());
  }, [dispatch]);

  return (
    <main className="main">
      {!isLogged && <Navigate to="/login" />}
      {isLogged
          && (
            <div className="profile">
              <h2 className="profile-title">Profile Page</h2>
              <div className="profile-header">
                <div className="profile-header__identity">
                  <img src={getIconByKey('affinity')} alt="Profile avatar" className="profile-header__avatar" />
                  <h3 className="profile-pseudo">{username}</h3>
                </div>
                <div className="profile-header__actions">
                  <button type="button" className="profile-header__logout" onClick={handleLogout}>
                    Logout
                    {' '}
                    <FiLogOut />
                  </button>
                  <button type="button" className="profile-header__settings" onClick={() => setShowSettings(!showSettings)}>
                    Settings
                    {' '}
                    <FiSettings />
                    {' '}
                  </button>
                  {showSettings
                    && (
                      <div className="profile-header__settings-actions">
                        <button type="button" className="profile-header__settings-actions__edit" onClick={handleEditUser}>Edit Profile</button>
                        <button type="button" className="profile-header__settings-actions__delete" onClick={() => setShowConfirmModal(true)}>Delete Profile</button>
                      </div>
                    )}

                  <Modal
                    modalXl={false}
                    shown={showConfirmModal}
                    close={handleCloseModal}
                  >
                    <div className="profile__modal-content">
                      <p className="profile__modal-text">If you confirm, you will lose all informations related.</p>
                      <p className="profile__modal-text">Do you still want to delete?</p>
                      <div className="profile__modal-confirm">
                        <button type="button" className="profile__modal__button-delete" onClick={handleDeleteUser}>Delete</button>
                        <button type="button" className="profile__modal__button-cancel" onClick={handleCloseModal}>Cancel</button>
                      </div>
                    </div>
                  </Modal>

                </div>
              </div>
              <div className="profile-divider" />
              <div className="profile-content">
                <h3>My loadouts</h3>
                {isLoading && <BiLoaderCircle className="profile-content__loader" />}
                {!isLoading

              && (
                <ul className="profile-content__list">
                  {loadouts && loadouts.map((loadout) => (
                    <Loadout key={loadout.id} loadout={loadout} />
                  ))}
                </ul>
              )}
              </div>
            </div>
          )}
    </main>
  );
}

export default ProfilePage;