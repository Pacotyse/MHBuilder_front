import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchAllLoadouts } from '../../store/reducers/loadout';
import Loadout from '../Loadout';

function LatestBuild() {
  const dispatch = useAppDispatch();
  const loadouts = useAppSelector((state) => state.loadout.loadouts);
  useEffect(() => {
    dispatch(fetchAllLoadouts());
  }, [dispatch]);

  return (
    <ul className="community-container-right-content-list">
      {/* eslint-disable-next-line max-len */}
      {loadouts?.map((loadout) => <Loadout key={loadout.id} isOnProfilePage={false} loadout={loadout} />)}
    </ul>
  );
}

export default LatestBuild;
