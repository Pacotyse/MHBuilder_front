import { FormEvent } from 'react';
import Field from '../LoginForm/Field';

interface SignInFormProps {
  email: string;
  password: string;
  username: string
  changeField: (value: string, name: 'email' | 'password' | 'username') => void;
  handleSignIn: () => void;
  isLogged: boolean
}
function SignInForm({
  email,
  password,
  username,
  changeField,
  handleSignIn,
  isLogged,
}: SignInFormProps) {
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
          <h3 className="login-form-title">REGISTER</h3>
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
            Register
          </button>
        </form>
      )}
    </div>
  );
}

export default SignInForm;
