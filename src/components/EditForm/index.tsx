import { FormEvent } from 'react';
import Field from '../LoginForm/Field';
import { useAppSelector } from '../../hooks/redux';

interface EditFormProps {
  password: string
  passwordConfirm: string
  username: string
  changeField: (value: string, name: 'password' | 'username' | 'passwordConfirm') => void
  handleEdit: () => void
}

function EditForm({
  password,
  passwordConfirm,
  username,
  changeField,
  handleEdit,
}: EditFormProps) {
  const isLoading = useAppSelector((state) => state.user.isLoading);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleEdit();
  };

  const handleChangeField = (name: 'password' | 'username' | 'passwordConfirm') => (value: string) => {
    changeField(value, name);
  };

  return (

    <div className="login-form">

      <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
        <h3 className="login-form-title">Edit</h3>
        <Field
          disabled={isLoading}
          type="password"
          placeholder="Password"
          onChange={handleChangeField('password')}
          value={password}
        />
        <Field
          disabled={isLoading}
          type="password"
          placeholder="Confirm password"
          onChange={handleChangeField('passwordConfirm')}
          value={passwordConfirm}
        />
        <Field
          disabled={isLoading}
          type="text"
          placeholder="Username"
          onChange={handleChangeField('username')}
          value={username}
        />
        <button
          type="submit"
          className="login-form-button"
        >
          Confirm
        </button>
      </form>
    </div>
  );
}

export default EditForm;
