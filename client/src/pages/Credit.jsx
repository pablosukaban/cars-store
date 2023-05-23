import UnderlineBlock from '../UI/UnderlineBlock';
import BottomImage from '../components/BottomImage';
import SubHero from '../components/SubHero';
import { creditArr } from '../utils/data';
import { motion } from 'framer-motion';

const imageLink =
    'https://static.wixstatic.com/media/548a7f_658a8daed2714200abe5ce17cd7a141f.jpg/v1/fill/w_728,h_640,al_b,q_85,enc_auto/548a7f_658a8daed2714200abe5ce17cd7a141f.jpg';

const Credit = () => {
    return (
        <motion.main>
            <SubHero imageLink={imageLink} mainText='Кредитование' />
            <div className='bg-secondaryLightGray'>
                <div className='mx-auto max-w-5xl px-6 py-12 '>
                    <div className='mb-8 flex w-full flex-col items-center justify-center gap-4 bg-secondaryLightGray md:mb-16 md:flex-row'>
                        {creditArr.map((item, index) => (
                            <div
                                key={index}
                                className='flex flex-col items-center justify-center gap-2 text-center text-gray-500'
                            >
                                <div className='grid h-24 w-24 place-items-center rounded-full '>
                                    <img
                                        src={item.image}
                                        className='object-contain'
                                    />
                                </div>
                                <h2 className='text-xl font-bold '>
                                    {item.title}
                                </h2>
                                <p className='max-w-[300px]'>{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className='mb-8 flex flex-col items-center justify-center gap-4 text-center md:-mb-24 md:gap-8 '>
                        <h1 className='text-4xl font-bold md:text-6xl lg:text-8xl'>
                            Получите <br /> кредит сегодня
                        </h1>
                        <UnderlineBlock />
                        <p className='max-w-[500px] text-gray-500 md:text-lg'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Eligendi temporibus impedit voluptatum
                            reprehenderit repellat culpa!
                        </p>
                        <p className='max-w-[500px] text-gray-500 md:text-lg'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. In voluptatibus aliquid quia amet accusamus
                            aut enim, illo tempora consequuntur ipsa!
                        </p>
                    </div>
                    <div className='relative z-40 grid gap-y-2 bg-white md:-bottom-64 md:grid-cols-2'>
                        <div className='grid place-items-center bg-primaryOrange p-8 text-center text-secondaryGray md:p-4'>
                            <div className='px-4'>
                                <h2 className='mb-2 text-2xl font-bold md:text-4xl'>
                                    Обратитесь сегодня!
                                </h2>
                                <p className='text-lg uppercase md:text-xl'>
                                    УКАЖИТЕ ВАШИ ДАННЫЕ, <br /> И МЫ СКОРО
                                    СВЯЖЕМСЯ С ВАМИ
                                </p>
                            </div>
                        </div>
                        <div>
                            <form
                                action=''
                                className='flex flex-col gap-4 p-6 md:p-12'
                            >
                                <input
                                    placeholder='Имя'
                                    required
                                    className='border border-gray-500 p-2 md:p-4 md:text-lg'
                                />
                                <input
                                    placeholder='Эл. почта'
                                    className='border border-gray-500 p-2 md:p-4 md:text-lg'
                                    type='email'
                                    required
                                />
                                <input
                                    placeholder='Телефон'
                                    className='border border-gray-500 p-2 md:p-4 md:text-lg'
                                    type='tel'
                                    required
                                />
                                <textarea
                                    placeholder='Сообщение'
                                    className='border border-gray-500 p-2 md:p-4 md:text-lg'
                                ></textarea>
                                <button className='w-full rounded border border-transparent bg-secondaryGray px-6 py-3 font-semibold uppercase text-white transition hover:border-secondaryGray hover:bg-white hover:text-secondaryGray sm:w-auto sm:px-12 sm:py-4 md:self-end'>
                                    Отправить
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <BottomImage />
        </motion.main>
    );
};

export default Credit;
