import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { deleteUser, logout } from '../../store/reducers/user';
import './styles.scss';
import getIconByKey from '../../utils/icons';
import Modal from '../../components/Modal';

function ProfilePage() {
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const username = useAppSelector((state) => state.user.username);

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
                  <button type="button" className="profile-header__logout" onClick={handleLogout}>Logout</button>
                  <button type="button" className="profile-header__settings" onClick={() => setShowSettings(!showSettings)}>Settings</button>
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

              <div className="profile-content">
                <ul className="profile-content__list">
                  <li className="profile-content__loadout">a</li>
                  <li className="profile-content__loadout">a</li>
                  <li className="profile-content__loadout">a</li>
                </ul>
              </div>
            </div>
          )}
    </main>
  );
}

export default ProfilePage;
