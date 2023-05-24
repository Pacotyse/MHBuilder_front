import React from 'react';
import './SecondSection.scss';
// import { Button } from '../Button';

function SecondSection() {
  return (

    <div className="secondSection-container">
      <div className="communityBuild-container">
        <div className="communityBuild-container-text">
          <h1 className="communityBuild-h1">Community&apos;s Build</h1>
          <p className="communityBuild-p">Explore the loadouts created by the community to discover the best optimizations proposed by fellow players. Gain insights, inspiration, and strategies from experienced hunters to enhance your gameplay and achieve new heights in your Monster Hunter adventures.</p>
          <button type="button" className="communityBuild-btn">
            Go community builds
          </button>
        </div>
      </div>

      <div className="lastestBuild-container">
        <div className="lastestBuild-container-widget">
          <h1 className="lastestBuild-h1">Lastest Build</h1>
          <div className="lastestBuild-loadouts">
            <p className="lastestBuild-loadouts-p">Loadout 1</p>
            <p className="lastestBuild-loadouts-p">Loadout 2</p>
            <p className="lastestBuild-loadouts-p">Loadout 3</p>
            <p className="lastestBuild-loadouts-p">Loadout 4</p>
            <p className="lastestBuild-loadouts-p">Loadout 5</p>
            <p className="lastestBuild-loadouts-p">Loadout 1</p>
            <p className="lastestBuild-loadouts-p">Loadout 2</p>
            <p className="lastestBuild-loadouts-p">Loadout 3</p>
            <p className="lastestBuild-loadouts-p">Loadout 4</p>
            <p className="lastestBuild-loadouts-p">Loadout 5</p>
            <p className="lastestBuild-loadouts-p">Loadout 1</p>
            <p className="lastestBuild-loadouts-p">Loadout 2</p>
            <p className="lastestBuild-loadouts-p">Loadout 3</p>
            <p className="lastestBuild-loadouts-p">Loadout 4</p>
            <p className="lastestBuild-loadouts-p">Loadout 5</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SecondSection;
