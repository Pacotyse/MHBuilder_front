import './styles.scss';

interface WeaponTypeProps {
  name: string
  icon: string
}

function WeaponType({ name, icon } : WeaponTypeProps) {
  return (
    <button type="button" className="weapon-type">
      <img src={icon} alt={`${name} icon`} className="item__icon" />
      <span>{name}</span>
    </button>
  );
}

export default WeaponType;
