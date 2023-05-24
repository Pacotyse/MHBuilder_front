import React, { useEffect } from 'react';
import './styles.scss';

import Loadout from '../../components/Loadout/index';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchAllLoadouts } from '../../store/reducers/loadout';
import { BiLoaderCircle } from 'react-icons/bi';

function Loadouts() {
  const dispatch = useAppDispatch();

  const loadouts = useAppSelector((state) => state.loadout.loadouts);
  const errorMessage = useAppSelector((state) => state.loadout.errorMessage);
  const isLoading = useAppSelector((state) => state.loadout.isLoading);

  useEffect(() => {
    dispatch(fetchAllLoadouts());
  }, [dispatch]);

  return (
    <main className="main-loadout">
      {/* //? SECTION Search by code */}

      <div className="loadouts-search">
        <h2 className="loadouts-search_title">FIND BY CODE</h2>
        <p className="loadouts-search__description">Got loadout codes? Paste them below to get them to the builder and see details!</p>

        <form className="loadouts-search__form">
          <input type="text" placeholder="Past your code here" />
          <button type="button" className="loadouts-search__submit-button">Go</button>
        </form>
      </div>
      {/* //? SECTION all loadouts and filter */}
      <div className="loadouts-list__container">

        <div className="loadouts-list__filters">
          <button type="button" className="loadouts-list__name">Name</button>
          <button type="button" className="loadouts-list__-rated">Rated</button>
          <button type="button" className="loadouts-list__latest">Latest</button>
          <div className="loadouts-searchbar">
            <input
              type="text"
              placeholder="Loadout name"
            />
            <button type="submit">Ok</button>
          </div>
        </div>

        <ul className="loadouts-list">
          {isLoading && <BiLoaderCircle className="loadouts-list__loader" />}
          {errorMessage && <span className="loadouts-list__error">{errorMessage}</span>}
          {loadouts?.map((loadout) => <Loadout key={loadout.id} loadout={loadout} />)}
        </ul>
      </div>
    </main>
  );
}

export default Loadouts;
