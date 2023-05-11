import { BsFillEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';

const Footer = () => {
    return (
        <footer className='w-full bg-secondaryGray pt-8 text-white'>
            <div className='mx-auto max-w-7xl px-6'>
                <div className='mb-4 flex flex-col items-center justify-center gap-4 text-center sm:gap-6 md:gap-8'>
                    <h2 className='text-4xl font-bold uppercase text-primaryOrange sm:text-6xl md:text-8xl'>
                        Приходите
                    </h2>
                    <p className='max-w-[130px] uppercase md:max-w-full md:text-xl'>
                        И УЕЗЖАЙТЕ НА СОБСТВЕННОМ АВТОМОБИЛЕ!
                    </p>
                </div>
                <div className='flex flex-col items-start justify-center gap-x-6 gap-y-4 sm:items-center md:mt-6 md:flex-row'>
                    <div className='flex items-center justify-start gap-4 text-gray-400 sm:gap-2'>
                        <BsFillEnvelopeFill className='h-5 w-5' />
                        <a href='mailto:mail@gmail.com'>mail@gmail.com</a>
                    </div>
                    <div className='flex items-center justify-start gap-4 text-gray-400 sm:gap-2'>
                        <BiMap className='h-5 w-5' />
                        <span>ул. Арбат, 1а, Москва 119019, Россия</span>
                    </div>
                    <div className='flex items-center justify-start gap-4 text-gray-400 sm:gap-2'>
                        <BsFillTelephoneFill className='h-5 w-5' />
                        <a href='tel:+7 (495) 000-00-00'>+7 (495) 000-00-00</a>
                    </div>
                </div>
            </div>
            <div className='mt-8 border-t border-gray-500 px-4 py-6 text-center text-gray-500'>
                © 2035 Автоэкспресс.
            </div>
        </footer>
    );
};

export default Footer;
