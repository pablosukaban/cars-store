import { AiOutlineMenu } from 'react-icons/ai';
import { IoIosClose } from 'react-icons/io';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { isAuthLinks, notAuthLinks } from '../utils/constants';
import { useAppSelector } from '../hooks/redux';

const Header = () => {
    const { isAuth } = useAppSelector((state) => state.user);
    const [isNavOpened, setIsNavOpened] = useState(false);

    const navLinks = isAuth ? isAuthLinks : notAuthLinks;

    const openNav = () => {
        setIsNavOpened(true);
        document.body.style.overflow = 'hidden';
    };

    const closeNav = () => {
        setIsNavOpened(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <header className='sticky top-0 z-50 bg-white text-center'>
            <div className=''>
                <div className=''>
                    <div className='mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2 sm:py-4 md:py-6'>
                        <div className='flex w-full flex-col items-start justify-between sm:flex-row sm:items-center'>
                            <h1 className='mb-2 text-xl font-bold italic'>
                                Астория
                            </h1>
                            <div className='text-left'>
                                <span className='font-bold uppercase'>
                                    Звоните сейчас
                                </span>
                                <br className='block sm:hidden' />
                                <span className='hidden sm:inline'> | </span>
                                <span>ТЕЛЕФОН: +7 (495) 000-00-00</span>
                            </div>
                        </div>
                        <button
                            onClick={openNav}
                            className='block aspect-square rounded border border-primaryOrange p-3 sm:hidden'
                        >
                            <AiOutlineMenu className='h-7 w-7' />
                        </button>
                    </div>
                    {/* на компах */}
                    <nav className='bg-primaryOrange'>
                        <div className='mx-auto max-w-7xl'>
                            <ul className='hidden w-full justify-between gap-4 px-3 py-2 uppercase text-secondaryGray  sm:flex lg:py-4'>
                                {navLinks.map((item, index) => (
                                    <NavLink
                                        key={index}
                                        to={item.to}
                                        className={({ isActive }) =>
                                            isActive ? 'text-gray-500' : ''
                                        }
                                        onClick={closeNav}
                                    >
                                        <li className='transition hover:text-gray-500'>
                                            {item.name}
                                        </li>
                                    </NavLink>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>
                {/* на мобилах */}
                <nav
                    className={`fixed left-0 top-0 z-50 h-screen w-screen overflow-hidden bg-secondaryGray text-primaryOrange opacity-100 transition duration-300 ${
                        !isNavOpened && 'translate-x-full opacity-0'
                    } `}
                >
                    <div className='relative flex h-full w-full flex-col items-center justify-center text-center '>
                        <button
                            onClick={closeNav}
                            className='absolute right-5 top-5 text-white'
                        >
                            <IoIosClose className='h-12 w-12' />
                        </button>
                        <ul className='space-y-6'>
                            {navLinks.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.to}
                                    onClick={closeNav}
                                >
                                    <li className='cursor-pointer border-b border-white pb-2 pt-4 text-lg uppercase'>
                                        {item.name}
                                    </li>
                                </NavLink>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
            <div className='block h-1 w-full bg-primaryOrange sm:hidden' />
        </header>
    );
};

export default Header;
