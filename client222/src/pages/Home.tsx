import BestDeals from '../components/BestDeals';
import BottomImage from '../components/BottomImage';
import CallToAction from '../components/CallToAction';
import ChooseUs from '../components/ChooseUs';
import Hero from '../components/Hero';
import MainLinks from '../components/MainLinks';

const Home = () => {
    return (
        <main className='relative'>
            <Hero />
            <MainLinks />
            <BestDeals />
            <ChooseUs />
            <CallToAction />
            <BottomImage />
        </main>
    );
};

export default Home;
