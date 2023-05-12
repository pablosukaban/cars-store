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
    NEW_ROUTE,
} from './utils/constants';
import { useAppSelector } from './hooks/redux';

const Home = lazy(() => import('./pages/Home'));
const NewCars = lazy(() => import('./pages/NewCars'));
const AllCars = lazy(() => import('./pages/AllCars'));
const Car = lazy(() => import('./pages/Car'));
const Credit = lazy(() => import('./pages/Credit'));

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <Suspense fallback={<Loader />}>
            <Header />
            {children}
            <Footer />
        </Suspense>
    );
};

const App = () => {
    const { isAuth } = useAppSelector((state) => state.user);
    return (
        <div className='relative'>
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
                {isAuth && (
                    <>
                        {/* <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/admin-panel' element={<AdminPanel />} />
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
