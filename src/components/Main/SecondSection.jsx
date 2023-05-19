import React from 'react';
import './SecondSection.scss';
// import { Button } from '../Button';

function SecondSection() {
  return (

    <div className="secondSection-container">
      <div className="communityBuild-container">
        <h1 className="communityBuild-h1">Community's Build</h1>
        <p className="communityBuild-p">lorem</p>
        <button type="button" className="communityBuild-btn">
          Go community builds
        </button>
      </div>

      <div className="lastestBuild-container">
        <h1 className="lastestBuild-h1">Lastest Build</h1>
      </div>
    </div>
  );
}

export default SecondSection;
