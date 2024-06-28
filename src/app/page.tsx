import Header from '@components/Header';
import MainSection from '@components/MainSection';
import PlatformSection from '@components/PlatformSection';
import FilmLibrarySection from '@components/FilmLibrarySection';
import EasyAccessSection from '@components/EasyAccessSection';
import TokenSection from '@components/TokenSection';
import RoadmapSection from '@components/RoadmapSection';
import CountdownSection from '@components/CountdownSection';
import TeamSection from '@components/TeamSection';
import PresaleSection from '@components/PresaleSection';
import Footer from '@components/Footer';

const Home = () => (
  <div className='flex flex-col w-full items-center bg-black'>
    <Header />
    <MainSection />
    <PlatformSection />
    <FilmLibrarySection />
    <EasyAccessSection />
    <TokenSection />
    <RoadmapSection />
    <CountdownSection />
    <TeamSection />
    <PresaleSection />
    <Footer />
  </div>
);

export default Home;
