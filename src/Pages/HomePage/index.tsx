import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import Footer from '../../components/Footer/Footer';
import { checkTokenValidity } from '../../store/reducers/user';
import { useAppDispatch } from '../../hooks/redux';

function HomePage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkTokenValidity());
  }, [dispatch]);

  return (
  //! Conseil
  // ? Bien utiliser l'arborescense des classes pour plus de lisibilité du scss
    <main className="main">

      {/* //! FIRST SECTION */}
      <div className="goToBuilder-container">
        <div className="goToBuilder-container-text">
          <h1 className="goToBuilder-h1">Create your own loadout</h1>
          <p className="goToBuilder-p">Create and optimize your own Monster Hunter armor set. Customize your loadout with the best armor pieces, skills, and weapons to maximize your hunting potential. Whether you're a seasoned hunter or just starting your journey, our builder allows you to tailor your loadout to fit your playstyle and tackle the toughest challenges that await you in the game.</p>
          <div className="goToBuilder-btn">
            <Link
              to="/builder"
            >
              Go to Builder
            </Link>
          </div>
        </div>
      </div>

      {/* //! SECOND SECTION */}

      <div className="secondSection-container">
        <div className="secondSection-container-left">
          <div className="communityBuild-container">
            <div className="communityBuild-container-text">
              <h2 className="communityBuild-h2">Community&apos;s Build</h2>
              <p className="communityBuild-p">Explore the loadouts created by the community to discover the best optimizations proposed by fellow players. Gain insights, inspiration, and strategies from experienced hunters to enhance your gameplay and achieve new heights in your Monster Hunter adventures.</p>
              <button type="button" className="communityBuild-btn">
                Go community builds
              </button>
            </div>
          </div>
          <div className="discord-container">

            {/* <iframe src="https://discord.com/widget?id=1110701136249356378&theme=dark" frameBorder="0" width="250" height="300" allowtransparency="true"  /> */}

            <h1 className="discord-h1"> Join our discord</h1>

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

      {/* //! DISCORD */}

      <div className="discord-container">

        {/* <iframe src="https://discord.com/widget?id=1110701136249356378&theme=dark" width="700" height="300" allowtransparency="true" frameBorder="0" /> */}

        <h1 className="discord-h1"> Join our discord</h1>
        <div className="apiDiscord" />

        {/* //! LATEST UPDATE */}

      </div>
      <div className="latestUpdate-container">
        <h1 className="latestUpdate-h1"> Latest Update</h1>
        <p className="latestUpdate-p">Lorem Ipsum fjsolkdfjskldf slkdfjsl dfkjsldfk</p>
      </div>
      <Footer />

    </main>

  );
}

export default HomePage;
