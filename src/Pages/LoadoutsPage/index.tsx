import React from 'react';
import './styles.scss';
// import Footer from '../../components/Footer/Footer';
import LoadoutsSectionOne from '../../components/Loadout/LoadoutsSectionOne';
import LoadoutsSectionTwo from '../../components/Loadout/LoadoutsSectionTwo';
import LoadoutsCards from '../../components/Loadout/LoadoutsCards';
// import Loadout from '../../components/Loadout/index';

function Loadouts() {
  return (
    <div className="container">

      <LoadoutsSectionOne />
      <LoadoutsSectionTwo />
      <LoadoutsCards />

    </div>

  );
}

export default Loadouts;
