import React from 'react';
import './FirstSection.scss';
// import { Button } from '../Button';

function FirstSection() {
  return (
    <div className="goToBuilder-container">
      <div className="goToBuilder-container-text">
        <h1 className="goToBuilder-h1">Create your own loadout</h1>
        <p className="goToBuilder-p">Create and optimize your own Monster Hunter armor set. Customize your loadout with the best armor pieces, skills, and weapons to maximize your hunting potential. Whether you're a seasoned hunter or just starting your journey, our builder allows you to tailor your loadout to fit your playstyle and tackle the toughest challenges that await you in the game.</p>
        <div className="goToBuilder-btn">
          <button type="button" className="goToBuilder-btn-button">
            Go to Builder
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
