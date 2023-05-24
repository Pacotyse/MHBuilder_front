import React from 'react';
import './LoadoutsSectionOne.scss';

function LoadoutsSectionOne() {
  return (
    <div className="loadouts-container">
      <h1 className="loadouts-h1">Entrez votre code d&apos;armure</h1>
      <p className="loadouts-p">Les codes d&apos;armures sont obtenus en créant un ensemble d&apos;armure </p>
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
  );
}

export default LoadoutsSectionOne;
