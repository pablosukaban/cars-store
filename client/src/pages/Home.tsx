import BestDeals from '../components/BestDeals';
import ChooseUs from '../components/ChooseUs';
import Hero from '../components/Hero';
import MainLinks from '../components/MainLinks';

const Home = () => {
    return (
        <main className='relative min-h-[200vh]'>
            <Hero />
            <MainLinks />
            <BestDeals />
            <ChooseUs />
        </main>
    );
};

export default Home;
