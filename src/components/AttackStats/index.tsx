import { useAppSelector } from '../../hooks/redux';
import './styles.scss';

function AttackStats() {
  const stats = useAppSelector((state) => state.builder.buildStats?.stats);
  return (
    <div className="stats-container">
      <h3 className="stats-title">Attack stats</h3>
      <div>
        Neutral attack :
        {' '}
        <span className="stats-value">
          {stats?.attack}
        </span>
      </div>
      {/* back to be modify */}
      {/* {stats?.elements?.map((element) => (
        <div key={element.name}>
          {`${element.name} : `}
          <span className="stats-value">
            {element.value}
          </span>
        </div>
      ))} */}

      {Boolean(stats?.elements.fire)
      && (
      <div>
        {'Fire : '}
        <span className="stats-value">
          {stats?.elements.fire}
        </span>
      </div>
      )}
      {Boolean(stats?.elements.water)
      && (
      <div>
        {'Water : '}
        <span className="stats-value">
          {stats?.elements.water}
        </span>
      </div>
      )}
      {Boolean(stats?.elements.thunder)
      && (
      <div>
        {'Thunder : '}
        <span className="stats-value">
          {stats?.elements.thunder}
        </span>
      </div>
      )}
      {Boolean(stats?.elements.ice)
      && (
      <div>
        {'Ice : '}
        <span className="stats-value">
          {stats?.elements.ice}
        </span>
      </div>
      )}
      {Boolean(stats?.elements.dragon)
      && (
      <div>
        {'Dragon : '}
        <span className="stats-value">
          {stats?.elements.dragon}
        </span>
      </div>
      )}
      <div>
        Affinity :
        {' '}
        <span className="stats-value">
          {stats?.affinity}
          %
        </span>
      </div>
      {/* no secret effect ? */}
      {/* <div>
        Secret effect :
        {' '}
        <span className="stats-value">
          {stats?.secret_effect}
        </span>
      </div> */}
    </div>
  );
}

export default AttackStats;
