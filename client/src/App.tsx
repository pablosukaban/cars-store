import { Suspense, lazy } from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Footer from './components/Footer';
import {
    ALL_ROUTE,
    CAR_ROUTE,
    CREDIT_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    NEW_ROUTE,
    REGISTRATION_ROUTE,
} from './utils/constants';
import { useAppSelector } from './hooks/redux';

const Home = lazy(() => import('./pages/Home'));
const NewCars = lazy(() => import('./pages/NewCars'));
const AllCars = lazy(() => import('./pages/AllCars'));
const Car = lazy(() => import('./pages/Car'));
const Credit = lazy(() => import('./pages/Credit'));
const Auth = lazy(() => import('./pages/Auth'));

const Container = ({
    isNeedFooter = true,
    children,
}: {
    children: React.ReactNode;
    isNeedFooter?: boolean;
}) => {
    return (
        <Suspense fallback={<Loader />}>
            <Header />
            {children}
            {isNeedFooter && <Footer />}
        </Suspense>
    );
};

const App = () => {
    const { isAuth } = useAppSelector((state) => state.user);
    return (
        <div className='relative min-h-screen'>
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
                        {/*  <Route path='/admin-panel' element={<AdminPanel />} />
            <Route path='/profile' element={<Profile />}>
              <Route path='orders' element={<Orders />} />
            </Route> */}
                    </>
                )}
                <Route path='*' element={<div>Страница не найдена</div>} />
                {/* маршрут для страницы 404 */}
            </Routes>
        </div>
    );
};

export default App;
