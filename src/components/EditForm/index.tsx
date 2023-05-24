import { FormEvent } from 'react';
import Field from '../LoginForm/Field';
import { useAppSelector } from '../../hooks/redux';

interface EditFormProps {

  username: string
  changeField: (value: string) => void
  handleEdit: () => void
}

function EditForm({

  username,
  changeField,
  handleEdit,
}: EditFormProps) {
  const isLoading = useAppSelector((state) => state.user.isLoading);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleEdit();
  };

  const handleChangeField = (value: string) => {
    changeField(value);
  };

  return (

    <div className="login-form">

      <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
        <h3 className="login-form-title">Edit</h3>
        <Field
          disabled={isLoading}
          type="text"
          placeholder="Username"
          onChange={handleChangeField}
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
