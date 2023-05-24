import React, { useEffect } from 'react';
import './styles.scss';

import Loadout from '../../components/Loadout/index';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchAllLoadouts } from '../../store/reducers/loadout';

function Loadouts() {
  const dispatch = useAppDispatch();

  const loadouts = useAppSelector((state) => state.loadout.loadouts);

  useEffect(() => {
    dispatch(fetchAllLoadouts());
  }, [dispatch]);

  return (
    <main className="main-loadout">
      {/* //! SECTION 1 */}

      <div className="loadouts-search">
        <h2 className="loadouts-search_title">Entrez votre code d&apos;armure</h2>
        <p className="loadouts-search__description">Les codes d&apos;armures sont obtenus en créant un ensemble d&apos;armure </p>
        <div className="loadouts-searchbar">
          <input
            type="text"
            placeholder="Past your code here"
          />
        </div>
        <div className="loadouts-btn">
          <button type="button" className="loadouts-button">
            Go to
          </button>
        </div>

      </div>
      {/* //! SECTION 2 */}
      <div className="loadouts-filters">

        <div className="loadouts-filters-btn">

          <button type="button" className="loadouts-filters-name">
            Name
          </button>

          <button type="button" className="loadouts-filters-rated">
            Rated
          </button>

          <button type="button" className="loadouts-filters-latest">
            Latest
          </button>
        </div>

        <div className="loadouts-searchbar">
          <input
            type="text"
            placeholder="Search items here"
          />
        </div>
      </div>

      {/* //! SECTION CARDS */}

      <div className="cardsContainer">
        <ul className="loadout-list">
          {loadouts?.map((loadout) => <Loadout key={loadout.id} loadout={loadout} />)}
        </ul>

      </div>

    </main>

  );
}

export default Loadouts;
