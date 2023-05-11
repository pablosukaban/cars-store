import HeroBgLarge from '../images/heroBgLarge.webp';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);

    return (
        <section className='relative min-h-[90vh] w-full'>
            <motion.div
                style={{ y }}
                className='absolute -z-50 h-full min-h-[375px] w-full'
            >
                <img src={HeroBgLarge} className='h-full w-full object-cover' />
            </motion.div>
            <div className='absolute bottom-0 w-full space-y-8 bg-black bg-opacity-25 px-4 py-4 text-center text-white'>
                <h1 className='text-3xl font-bold sm:text-4xl md:text-8xl'>
                    АВТОЭКСПРЕСС
                </h1>
                <p className='text-xl font-semibold sm:text-2xl md:text-3xl'>
                    СОТНИ НОВЫХ ПОСТУПЛЕНИЙ: КУПИТЕ ВАШУ МЕЧТУ УЖЕ СЕГОДНЯ
                </p>
                <div className='mx-auto h-2 w-[96px] bg-primaryOrange' />
            </div>
        </section>
    );
};

export default Hero;
