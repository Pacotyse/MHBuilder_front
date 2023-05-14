import { useAppSelector } from '../../hooks/redux';
import getIconByKey from '../../utils/icons';
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

  return (
    <div className="stats-container">
      <h4>
        Defense :
        {' '}
        <span className="stats-value">
          {total(defenseStats)}
        </span>
      </h4>
      <div>
        Res.
        {' '}
        <img src={getIconByKey('element_fire')} alt="fire icon" className="stats__element-icon" />
        {' '}
        :
        {' '}
        <span className="stats-value">
          {total(resFire)}
        </span>
      </div>

      <div>
        Res.
        {' '}
        <img src={getIconByKey('element_ice')} alt="ice icon" className="stats__element-icon" />
        {' '}
        :
        {' '}
        <span className="stats-value">
          {total(resIce)}
        </span>
      </div>
      <div>
        Res.
        {' '}
        <img src={getIconByKey('element_thunder')} alt="thunder icon" className="stats__element-icon" />
        {' '}
        :
        {' '}
        <span className="stats-value">
          {total(resThunder)}
        </span>
      </div>
      <div>
        Res.
        {' '}
        <img src={getIconByKey('element_water')} alt="water icon" className="stats__element-icon" />
        {' '}
        :
        {' '}
        <span className="stats-value">
          {total(resWater)}
        </span>
      </div>
      <div>
        Res.
        {' '}
        <img src={getIconByKey('element_dragon')} alt="dragon icon" className="stats__element-icon" />
        {' '}
        :
        {' '}
        <span className="stats-value">
          {total(resDragon)}
        </span>
      </div>
    </div>
  );
}

export default ArmorStats;
