import { useEffect } from 'react';
import './styles.scss';
import FirstSection from '../../components/Main/FirstSection';
import SecondSection from '../../components/Main/SecondSection';
import DiscordSection from '../../components/Main/DiscordSection';
import LatestUpdate from '../../components/Main/LatestUpdate';
import Footer from '../../components/Footer/Footer';
import { checkTokenValidity } from '../../store/reducers/user';
import { useAppDispatch } from '../../hooks/redux';

function HomePage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkTokenValidity());
  }, [dispatch]);

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
