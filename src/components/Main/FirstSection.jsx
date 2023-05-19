import React from 'react';
import './FirstSection.scss';
// import { Button } from '../Button';

function FirstSection() {
  return (
    <div className="goToBuilder-container">
      <h1 className="goToBuilder-h1">Créer votre ensemble</h1>
      <p className="goToBuilder-p">lorem</p>
      <div className="goToBuilder-btn">
        <button type="button" className="goToBuilder-btn-button">
          Go to Builder
        </button>
      </div>
    </div>
  );
}

export default FirstSection;
