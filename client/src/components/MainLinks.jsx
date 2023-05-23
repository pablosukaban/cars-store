import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ALL_ROUTE, NEW_ROUTE } from '../utils/constants';

const MainLinks = () => {
    return (
        <section>
            <div className='grid grid-cols-1 bg-primaryOrange text-center md:grid-cols-2'>
                <Link to={NEW_ROUTE}>
                    <motion.div
                        initial={{ x: 600, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        viewport={{ once: true }}
                        className='space-y-4 bg-primaryOrange px-4 py-8 text-secondaryGray sm:py-16 md:py-24'
                    >
                        <h1 className='text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl'>
                            Новые <br className='' /> поступления
                        </h1>
                        <p className='mx-auto max-w-[320px] text-lg'>
                            Откройте для себя новые возможности с нашими
                            последними поступлениями автомобилей.
                        </p>
                    </motion.div>
                </Link>
                <Link to={ALL_ROUTE}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        viewport={{ once: true }}
                        className='space-y-4 bg-secondaryGray px-4 py-8 text-white sm:py-16 md:py-24'
                    >
                        <h1 className='text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl '>
                            Авто с<br className='' /> пробегом
                        </h1>
                        <p className='mx-auto max-w-[320px] text-lg'>
                            Надежные и проверенные варианты для тех, кто ценит
                            непревзойденное соотношение цены и качества.
                        </p>
                    </motion.div>
                </Link>
            </div>
        </section>
    );
};

export default MainLinks;
