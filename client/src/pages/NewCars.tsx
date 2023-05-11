import { CarsList } from '../components/BestDeals';
import SubHero from '../components/SubHero';

const imageLink =
    'https://static.wixstatic.com/media/548a7f_0ed4e9a8699643c2b6d27de738532f47.jpg/v1/fill/w_1727,h_802,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/548a7f_0ed4e9a8699643c2b6d27de738532f47.jpg';

const exampleCarImg =
    'https://static.wixstatic.com/media/84770f_f0dd9ac84eeb4ae9ba19104d28948dba.jpg/v1/fill/w_327,h_217,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_f0dd9ac84eeb4ae9ba19104d28948dba.jpg';

export type exapleCar = {
    img: string;
    title: string;
    description: string;
};

const exapleArr = new Array<exapleCar>(9).fill({
    img: exampleCarImg,
    title: 'Athos R8',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, atque. 123123',
});

const NewCars = () => {
    return (
        <main className='relative'>
            <SubHero imageLink={imageLink} mainText='Новые поступления' />
            <div className='bg-white py-16'>
                <div className='mx-auto w-full max-w-7xl '>
                    <CarsList givenArr={exapleArr} />
                </div>
            </div>
        </main>
    );
};

export default NewCars;
