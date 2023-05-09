import BestDeals from '../components/BestDeals';
import Hero from '../components/Hero';
import MainLinks from '../components/MainLinks';

const Home = () => {
    return (
        <main className='relative min-h-[200vh]'>
            <Hero />
            <MainLinks />
            <BestDeals />
        </main>
    );
};

export default Home;
