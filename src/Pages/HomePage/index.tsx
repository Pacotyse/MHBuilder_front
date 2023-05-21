import { useState } from 'react';
import BuilderPage from '../BuilderPage';
import './styles.scss';
import FirstSection from '../../components/Main/FirstSection';
import SecondSection from '../../components/Main/SecondSection';
import DiscordSection from '../../components/Main/DiscordSection';
import LatestUpdate from '../../components/Main/LatestUpdate';
import Footer from '../../components/Footer/Footer';

function HomePage() {
  return (
    <div className="container">

      <FirstSection />
      <SecondSection />
      <DiscordSection />
      <LatestUpdate />
      <Footer />

    </div>

  );
}

export default HomePage;
