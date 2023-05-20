import BestDeals from '../components/BestDeals';
import BottomImage from '../components/BottomImage';
import CallToAction from '../components/CallToAction';
import ChooseUs from '../components/ChooseUs';
import Hero from '../components/Hero';
import MainLinks from '../components/MainLinks';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.main className='relative'>
            <Hero />
            <MainLinks />
            <BestDeals />
            <ChooseUs />
            <CallToAction />
            <BottomImage />
        </motion.main>
    );
};

export default Home;
