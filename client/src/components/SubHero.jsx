import { motion, useScroll, useTransform } from 'framer-motion';
import UnderlineBlock from '../UI/UnderlineBlock';

const testLink =
    'https://static.wixstatic.com/media/548a7f_0ed4e9a8699643c2b6d27de738532f47.jpg/v1/fill/w_1727,h_802,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/548a7f_0ed4e9a8699643c2b6d27de738532f47.jpg';

const SubHero = ({ imageLink = testLink, mainText }) => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <section className='relative min-h-[50vh] w-full'>
            <motion.div
                style={{ y }}
                className='absolute -z-50 h-full min-h-[375px] w-full'
            >
                <img src={imageLink} className='h-full w-full object-cover' />
            </motion.div>
            <div className='absolute bottom-0 w-full space-y-8 bg-black bg-opacity-25 px-4 py-4 text-center text-white'>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className='text-3xl font-bold uppercase sm:text-4xl md:text-8xl'
                >
                    {mainText}
                </motion.h1>
                <UnderlineBlock />
            </div>
        </section>
    );
};

export default SubHero;
