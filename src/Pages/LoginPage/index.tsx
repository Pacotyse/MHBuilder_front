import LoginForm from '../../components/LoginForm';
import SignInForm from '../../components/SignInForm';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeCredentialsField, changeRegisterCredentialsField } from '../../store/reducers/user';

function LoginPage() {
  const dispatch = useAppDispatch();
  const loginEmail = useAppSelector((state) => state.user.credentials.email);
  const loginPassword = useAppSelector((state) => state.user.credentials.password);
  const registerEmail = useAppSelector((state) => state.user.registerCredentials.email);
  const registerPassword = useAppSelector((state) => state.user.registerCredentials.password);
  const registerUsername = useAppSelector((state) => state.user.registerCredentials.username);

  const handleChangeLoginField = (value: string, name: 'email' | 'password') => {
    dispatch(changeCredentialsField({
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
  return (
    <div>
      <LoginForm
        email={loginEmail}
        password={loginPassword}
        changeField={handleChangeLoginField}
        handleLogin={() => Boolean(false)}
        handleLogout={() => Boolean(false)}
        isLogged={false}
      />
      <SignInForm
        email={registerEmail}
        password={registerPassword}
        username={registerUsername}
        changeField={handleChangeRegisterField}
        handleSignIn={() => false}
      />
    </div>
  );
}

export default LoginPage;
