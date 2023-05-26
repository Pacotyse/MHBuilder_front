import { useAppSelector } from '../../hooks/redux';
import Loadout from '../Loadout';

function LatestBuild() {
  const loadouts = useAppSelector((state) => state.loadout.loadouts);
  return (
    <ul>
      {/* eslint-disable-next-line max-len */}
      {loadouts?.map((loadout) => <Loadout key={loadout.id} isOnProfilePage={false} loadout={loadout} />)}
    </ul>
  );
}

export default LatestBuild;
