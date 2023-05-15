import { useAppSelector } from '../../hooks/redux';
import getIconByKey, { IIcons } from '../../utils/icons';
import './styles.scss';

function ArmorStats() {
  const head = useAppSelector((state) => state.builder.head);
  const arms = useAppSelector((state) => state.builder.arms);
  const chest = useAppSelector((state) => state.builder.chest);
  const legs = useAppSelector((state) => state.builder.legs);
  const waist = useAppSelector((state) => state.builder.waist);

  // Set all defense values in an array
  const defenseStats = [
    head?.defense,
    chest?.defense,
    arms?.defense,
    waist?.defense,
    legs?.defense,
  ];
  const resFire = [
    head?.resistances.fire,
    chest?.resistances.fire,
    arms?.resistances.fire,
    waist?.resistances.fire,
    legs?.resistances.fire,
  ];
  const resIce = [
    head?.resistances.ice,
    chest?.resistances.ice,
    arms?.resistances.ice,
    waist?.resistances.ice,
    legs?.resistances.ice,
  ];
  const resThunder = [
    head?.resistances.thunder,
    chest?.resistances.thunder,
    arms?.resistances.thunder,
    waist?.resistances.thunder,
    legs?.resistances.thunder,
  ];
  const resWater = [
    head?.resistances.water,
    chest?.resistances.water,
    arms?.resistances.water,
    waist?.resistances.water,
    legs?.resistances.water,
  ];
  const resDragon = [
    head?.resistances.dragon,
    chest?.resistances.dragon,
    arms?.resistances.dragon,
    waist?.resistances.dragon,
    legs?.resistances.dragon,
  ];

  function total(arr: (number | undefined)[]) {
    let sum = 0;
    arr.map((value) => {
      if (value) {
        sum += value;
        return sum;
      }
      return sum;
    });
    return sum;
  }
  const elements = [
    {
      name: 'fire',
      array: resFire,
    },
    {
      name: 'ice',
      array: resIce,
    },
    {
      name: 'thunder',
      array: resThunder,
    },
    {
      name: 'water',
      array: resWater,
    },
    {
      name: 'dragon',
      array: resDragon,
    },
  ];
  return (
    <div className="stats-container">
      <h3 className="stats-title">Armor stats</h3>
      <h4>
        Defense :
        {' '}
        <span className="stats-value">
          {total(defenseStats)}
        </span>
      </h4>
      {elements.map((element) => (
        <div key={element.name}>
          Res.
          {' '}
          <img src={getIconByKey(`element_${element.name}` as keyof IIcons)} alt={`${element.name} icon`} className="stats__element-icon" />
          {' '}
          :
          {' '}
          <span className="stats-value">
            {total(element.array)}
          </span>
        </div>
      ))}

    </div>
  );
}

export default ArmorStats;
