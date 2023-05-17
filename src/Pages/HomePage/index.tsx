import { useState } from 'react';
import BuilderPage from '../BuilderPage';
import './styles.scss';

function HomePage() {
  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.';
  const lastestUpdateText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.';

  return (
    <div className="container">
      <section className="goTobuilder">
        <h1 className="goTobuilder-h1">Créer votre ensemble</h1>
        <p className="goTobuilder-p">{description}</p>
        <div className="goToBuilder-btn">
          <button type="button" className="btn">
            Go to Builder
          </button>
        </div>
      </section>

      <section className="communityBuild">
        <div className="communityBuild-main">
          <h1 className="communityBuild-h1"> Community build</h1>
          <p className="communityBuild-p">{description}</p>
          <div className="communityBuild-btn">
            <button type="button" className="btn">
              Go to community build
            </button>
          </div>
        </div>
        <div className="communityBuild__lastestBuild">
          <h1 className="communityBuild__lastestBuild-h1"> Lastest build</h1>
          <p className="communityBuild__lastestBuild-p">{description}</p>

        </div>
      </section>

      <section className="discord">
        <h1 className="discord-h1"> Join our discord</h1>
        <div className="apiDiscord" />
      </section>
      <section className="lastestUpdate">
        <p className="lastestUpdate-p">{lastestUpdateText}</p>
      </section>
    </div>
  );
}

export default HomePage;
