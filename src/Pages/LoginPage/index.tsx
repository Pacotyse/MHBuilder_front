import { Navigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import SignInForm from '../../components/SignInForm';
import './styles.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  changeLoginCredentialsField, changeRegisterCredentialsField, login, logout, register,
} from '../../store/reducers/user';

function LoginPage() {
  const dispatch = useAppDispatch();
  const loginEmail = useAppSelector((state) => state.user.loginCredentials.email);
  const loginPassword = useAppSelector((state) => state.user.loginCredentials.password);
  const registerEmail = useAppSelector((state) => state.user.registerCredentials.email);
  const registerPassword = useAppSelector((state) => state.user.registerCredentials.password);
  const registerUsername = useAppSelector((state) => state.user.registerCredentials.username);
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const handleChangeLoginField = (value: string, name: 'email' | 'password') => {
    dispatch(changeLoginCredentialsField({
      value,
      field: name,
    }));
  };
  const handleChangeRegisterField = (value: string, name: 'email' | 'password' | 'username') => {
    dispatch(changeRegisterCredentialsField({
      value,
      field: name,
    }));
  };

  const handleSubmitLogin = () => {
    dispatch(login());
  };
  const handleSubmitRegister = () => {
    dispatch(register());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <main className="main">
      <div className="loginForm-container">
        {isLogged && <Navigate to="/profile" />}
        <LoginForm
          email={loginEmail}
          password={loginPassword}
          changeField={handleChangeLoginField}
          handleLogin={handleSubmitLogin}
          handleLogout={handleLogout}
          isLogged={isLogged}
        />
        <div className="signInForm-container">
          <SignInForm
            email={registerEmail}
            password={registerPassword}
            username={registerUsername}
            changeField={handleChangeRegisterField}
            handleSignIn={handleSubmitRegister}
            isLogged={isLogged}
          />
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
