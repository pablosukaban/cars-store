import { Suspense, lazy } from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Footer from './components/Footer';
import AllCars from './pages/AllCars';

const Home = lazy(() => import('./pages/Home'));
const NewCars = lazy(() => import('./pages/NewCars'));

const App = () => {
    return (
        <div className='relative'>
            <Header />
            <Routes>
                <Route
                    path='/'
                    element={
                        <Suspense fallback={<Loader />}>
                            <Home />
                        </Suspense>
                    }
                />
                <Route
                    path='/new'
                    element={
                        <Suspense fallback={<Loader />}>
                            <NewCars />
                        </Suspense>
                    }
                />
                <Route
                    path='/all'
                    element={
                        <Suspense fallback={<Loader />}>
                            <AllCars />
                        </Suspense>
                    }
                />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
