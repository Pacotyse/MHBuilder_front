import { useAppSelector } from '../../hooks/redux';
import './styles.scss';

function AttackStats() {
  const weapon = useAppSelector((state) => state.builder.weapon);
  return (
    <div className="stats-container">
      <h3 className="stats-title">Attack stats</h3>
      <div>
        Neutral attack :
        {' '}
        <span className="stats-value">
          {weapon?.attack}
        </span>
      </div>
      {weapon?.element.fire && (
        <div>
          Fire attack:
          {' '}
          <span className="stats-value">
            {weapon.element.fire}
          </span>
        </div>
      )}
      {weapon?.element.ice && (
        <div>
          Ice attack:
          {' '}
          <span className="stats-value">
            {weapon.element.ice}
          </span>
        </div>
      )}
      {weapon?.element.thunder && (
        <div>
          Thunder attack:
          {' '}
          <span className="stats-value">
            {weapon.element.thunder}
          </span>
        </div>
      )}
      {weapon?.element.water && (
        <div>
          Water attack:
          {' '}
          <span className="stats-value">
            {weapon.element.water}
          </span>
        </div>
      )}
      {weapon?.element.dragon && (
        <div>
          Dragon attack:
          {' '}
          <span className="stats-value">
            {weapon.element.dragon}
          </span>
        </div>
      )}
      <div>
        Affinity :
        {' '}
        <span className="stats-value">
          {weapon?.affinity}
          %
        </span>
      </div>
      <div>
        Secret effect :
        {' '}
        <span className="stats-value">
          {weapon?.secret_effect}
        </span>
      </div>
    </div>
  );
}

export default AttackStats;
