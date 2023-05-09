import { motion } from 'framer-motion';

const MainLinks = () => {
    return (
        <section>
            <div className='grid grid-cols-1 text-center md:grid-cols-2'>
                <motion.div className='space-y-4 bg-primaryOrange px-4 py-8 text-secondaryGray sm:py-16 md:py-24'>
                    <h1 className='text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl'>
                        Новые <br className='' /> машины
                    </h1>
                    <p className='mx-auto max-w-[320px] text-lg'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nisi magnam placeat autem esse cumque maxime.
                    </p>
                </motion.div>
                <div className='space-y-4 bg-secondaryGray px-4 py-8 text-white sm:py-16 md:py-24'>
                    <h1 className='text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl '>
                        Авто с<br className='' /> пробегом
                    </h1>
                    <p className='mx-auto max-w-[320px] text-lg'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nisi magnam placeat autem esse cumque maxime.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MainLinks;
