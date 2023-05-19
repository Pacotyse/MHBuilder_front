import { useState } from 'react';
import BuilderPage from '../BuilderPage';
import './styles.scss';
// import Footer from '../../components/Footer/Footer';
import FirstSection from '../../components/Main/FirstSection';
import SecondSection from '../../components/Main/SecondSection';
import DiscordSection from '../../components/Main/DiscordSection';
import LastestUpdate from '../../components/Main/LastestUpdate';

function HomePage() {
  return (
    <div className="container">

      <FirstSection />
      <SecondSection />
      <DiscordSection />
      <LastestUpdate />

    </div>

  );
}

export default HomePage;
