import LoginForm from '../../components/LoginForm';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeCredentialsField } from '../../store/reducers/user';

function LoginPage() {
  const dispatch = useAppDispatch();
  const email = useAppSelector((state) => state.user.credentials.email);
  const password = useAppSelector((state) => state.user.credentials.password);

  const handleChangeField = (value: string, name: 'email' | 'password') => {
    dispatch(changeCredentialsField({
      value,
      field: name,
    }));
  };
  return (
    <div>
      <LoginForm
        email={email}
        password={password}
        changeField={handleChangeField}
        handleLogin={() => Boolean(false)}
        handleLogout={() => Boolean(false)}
        isLogged={false}
      />
    </div>
  );
}

export default LoginPage;
