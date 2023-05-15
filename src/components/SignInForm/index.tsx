import { FormEvent } from 'react';
import Field from '../LoginForm/Field';
import { useAppSelector } from '../../hooks/redux';

interface SignInFormProps {
  email: string;
  password: string;
  username: string
  changeField: (value: string, name: 'email' | 'password' | 'username') => void;
  handleSignIn: () => void;
}
function SignInForm({
  email,
  password,
  username,
  changeField,
  handleSignIn,
}: SignInFormProps) {
  const isLogged = useAppSelector((state) => state.user.isLogged);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSignIn();
  };

  const handleChangeField = (name: 'email' | 'password' | 'username') => (value: string) => {
    changeField(value, name);
  };

  return (
    <div className="login-form">
      {!isLogged && (

        <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
          <Field
            placeholder="Email"
            onChange={handleChangeField('email')}
            value={email}
          />
          <Field
            type="password"
            placeholder="Password"
            onChange={handleChangeField('password')}
            value={password}
          />
          <Field
            type="text"
            placeholder="Username"
            onChange={handleChangeField('username')}
            value={username}
          />
          <button
            type="submit"
            className="login-form-button"
          >
            OK
          </button>
        </form>
      )}
    </div>
  );
}

export default SignInForm;
