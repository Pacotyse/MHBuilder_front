import LoginForm from '../../components/LoginForm';
import SignInForm from '../../components/SignInForm';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  changeLoginCredentialsField, changeRegisterCredentialsField, login, register,
} from '../../store/reducers/user';

function LoginPage() {
  const dispatch = useAppDispatch();
  const loginEmail = useAppSelector((state) => state.user.loginCredentials.email);
  const loginPassword = useAppSelector((state) => state.user.loginCredentials.password);
  const registerEmail = useAppSelector((state) => state.user.registerCredentials.email);
  const registerPassword = useAppSelector((state) => state.user.registerCredentials.password);
  const registerUsername = useAppSelector((state) => state.user.registerCredentials.username);

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

  return (
    <div>
      <LoginForm
        email={loginEmail}
        password={loginPassword}
        changeField={handleChangeLoginField}
        handleLogin={handleSubmitLogin}
        handleLogout={() => Boolean(false)}
        isLogged={false}
      />
      <SignInForm
        email={registerEmail}
        password={registerPassword}
        username={registerUsername}
        changeField={handleChangeRegisterField}
        handleSignIn={handleSubmitRegister}
      />
    </div>
  );
}

export default LoginPage;
