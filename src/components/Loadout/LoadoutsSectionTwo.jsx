import React from 'react';
import './LoadoutsSectionTwo.scss';

function LoadoutsSectionTwo() {
  return (
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
  );
}

export default LoadoutsSectionTwo;
