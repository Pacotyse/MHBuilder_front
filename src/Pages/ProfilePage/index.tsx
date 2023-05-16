import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { deleteUser, logout } from '../../store/reducers/user';
import './styles.scss';

function ProfilePage() {
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const username = useAppSelector((state) => state.user.username);

  function handleDeleteUser(): void {
    dispatch(deleteUser());
  }

  function handleLogout(): void {
    dispatch(logout());
  }

  return (
    <main className="main">
      {!isLogged && <Navigate to="/login" />}
      {isLogged
        && (
        <div>
          <h2>Profile Page</h2>
          <h3>{username}</h3>
          <div>
            <button type="button" onClick={handleLogout}>Disconnect</button>
            <button type="button" onClick={handleDeleteUser}>Delete Profile</button>
          </div>
        </div>
        )}
    </main>
  );
}

export default ProfilePage;
