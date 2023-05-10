import './styles.scss';

interface WeaponTypeProps {
  name: string
  icon: string
  openSelectionModal: (weapon: string) => void
}

function WeaponType({ name, icon, openSelectionModal }: WeaponTypeProps) {
  // name to kebab-case in order to display the right icon depending on weapon type
  const kebabCaseWeaponType = name.toLocaleLowerCase().split(' ').join('-');
  return (
    <button
      type="button"
      className="weapon-type"
      onClick={() => openSelectionModal(kebabCaseWeaponType)}
    >
      <img src={icon} alt={`${name} icon`} className="item__icon" />
      <span>{name}</span>
    </button>
  );
}

export default WeaponType;
