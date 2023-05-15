// == Import : npm
// == Import : local
import { ChangeEvent, useId } from 'react';
import './styles.scss';

interface FieldProps {
<<<<<<< HEAD
  disabled: boolean
=======
>>>>>>> 27fcd65 (feat (login): add component loginForm)
  value: string;
  type?: string;
  placeholder: string;
  onChange: (value: string) => void;
<<<<<<< HEAD
  children?: React.ReactNode;
}
// == Composant
function Field({
  disabled,
=======
}
// == Composant
function Field({
>>>>>>> 27fcd65 (feat (login): add component loginForm)
  value,
  type,
  placeholder,
  onChange,
<<<<<<< HEAD
  children,
=======
>>>>>>> 27fcd65 (feat (login): add component loginForm)
}: FieldProps) {
  const inputId = useId();

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    onChange(event.target.value);
  }

  return (
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
<<<<<<< HEAD
        disabled={disabled}
=======
>>>>>>> 27fcd65 (feat (login): add component loginForm)
      />

      <label
        htmlFor={inputId}
        className="field-label"
      >
        {placeholder}
      </label>
<<<<<<< HEAD
      {children}
=======
>>>>>>> 27fcd65 (feat (login): add component loginForm)
    </div>
  );
}

// Valeurs par défaut pour les props
Field.defaultProps = {
  type: 'text',
<<<<<<< HEAD
  children: undefined,
=======
>>>>>>> 27fcd65 (feat (login): add component loginForm)
};

// == Export
export default Field;
