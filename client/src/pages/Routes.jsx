import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from '../components/Loader';
import Footer from '../components/Footer';

import {
    ALL_ROUTE,
    CAR_ROUTE,
    CREDIT_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    NEW_ROUTE,
    ORDER_ROUTE,
    PROFILE_ROUTE,
    REGISTRATION_ROUTE,
} from '../utils/constants';

import Header from '../components/Header';
import { useAppSelector } from '../hooks/redux';

const Home = lazy(() => import('./Home'));
const NewCars = lazy(() => import('./NewCars'));
const AllCars = lazy(() => import('./AllCars'));
const Car = lazy(() => import('./Car'));
const Credit = lazy(() => import('./Credit'));
const Auth = lazy(() => import('./Auth'));
const Profile = lazy(() => import('./Profile'));
const Order = lazy(() => import('./Order'));

const Container = ({ isNeedFooter = true, children }) => {
    return (
        <Suspense fallback={<Loader />}>
            <Header />
            {children}
            {isNeedFooter && <Footer />}
        </Suspense>
    );
};

const CustomRoutes = () => {
    const { isAuth } = useAppSelector((state) => state.user);

    return (
        <Routes>
            <Route
                path={HOME_ROUTE}
                element={
                    <Container>
                        <Home />
                    </Container>
                }
            />
            <Route
                path={NEW_ROUTE}
                element={
                    <Container>
                        <NewCars />
                    </Container>
                }
            />
            <Route
                path={ALL_ROUTE}
                element={
                    <Container>
                        <AllCars />
                    </Container>
                }
            />
            <Route
                path={CREDIT_ROUTE}
                element={
                    <Container>
                        <Credit />
                    </Container>
                }
            />
            <Route
                path={CAR_ROUTE + '/:id'}
                element={
                    <Container>
                        <Car />
                    </Container>
                }
            />
            <Route
                path={LOGIN_ROUTE}
                element={
                    <Container isNeedFooter={false}>
                        <Auth />
                    </Container>
                }
            />
            <Route
                path={REGISTRATION_ROUTE}
                element={
                    <Container isNeedFooter={false}>
                        <Auth />
                    </Container>
                }
            />

            {isAuth && (
                <>
                    <Route
                        path={PROFILE_ROUTE}
                        element={
                            <Container isNeedFooter={false}>
                                <Profile />
                            </Container>
                        }
                    />
                    <Route
                        path={ORDER_ROUTE + '/:id'}
                        element={
                            <Container isNeedFooter={false}>
                                <Order />
                            </Container>
                        }
                    />
                    {/*<Route path='/profile' element={<Profile />}>
              <Route path='orders' element={<Orders />} />
            </Route> */}
                </>
            )}
            <Route
                path='*'
                element={
                    <div className='grid h-screen place-items-center font-bold'>
                        Страница не найдена
                    </div>
                }
            />
        </Routes>
    );
};

export default CustomRoutes;
