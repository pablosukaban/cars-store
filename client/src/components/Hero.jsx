import UnderlineBlock from '../UI/UnderlineBlock';
import HeroBgLarge from '../images/heroBgLarge.webp';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <section className='relative min-h-[90vh] w-full'>
            <motion.div
                style={{ y }}
                className='absolute -z-50 h-full min-h-[375px] w-full'
            >
                <img src={HeroBgLarge} className='h-full w-full object-cover' />
            </motion.div>
            <div className='absolute bottom-0 w-full space-y-8 bg-black bg-opacity-25 px-4 py-4 text-center uppercase text-white'>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className='text-3xl font-bold sm:text-4xl md:text-8xl'
                >
                    Астория
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className='text-xl font-semibold sm:text-2xl md:text-3xl'
                >
                    СОТНИ НОВЫХ ПОСТУПЛЕНИЙ: КУПИТЕ ВАШУ МЕЧТУ УЖЕ СЕГОДНЯ
                </motion.p>
                <UnderlineBlock />
            </div>
        </section>
    );
};

export default Hero;
