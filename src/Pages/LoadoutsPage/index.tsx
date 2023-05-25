import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

import { BiLoaderCircle } from 'react-icons/bi';
import Loadout from '../../components/Loadout';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchAllLoadouts, setLoadoutCodeField } from '../../store/reducers/loadout';
import { importLoadoutById } from '../../store/reducers/builder';

function Loadouts() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loadouts = useAppSelector((state) => state.loadout.loadouts);
  const errorMessage = useAppSelector((state) => state.loadout.errorMessage);
  const isLoading = useAppSelector((state) => state.loadout.isLoading);
  const loadoutCode = useAppSelector((state) => state.loadout.loadoutCode);

  useEffect(() => {
    dispatch(fetchAllLoadouts());
  }, [dispatch]);

  function handleGetOneLoadout(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(importLoadoutById());
    // go to builder page
    navigate('/builder');
  }

  return (
    <main className="main-loadout">
      {/* //? SECTION Search by code */}

      <div className="loadouts-search">
        <h2 className="loadouts-search_title">FIND BY CODE</h2>
        <p className="loadouts-search__description">Got loadout codes? Paste them below to get them to the builder and see details!</p>

        <form
          className="loadouts-search__form"
          onSubmit={handleGetOneLoadout}
        >
          <input
            type="text"
            placeholder="Past your code here"
            value={loadoutCode}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              dispatch(setLoadoutCodeField(event.target.value));
            }}
          />
          <button type="submit" className="loadouts-search__submit-button">Go</button>
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
          {loadouts?.map((loadout) => (
            <Loadout key={loadout.id} loadout={loadout} isOnProfilePage={false} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Loadouts;
