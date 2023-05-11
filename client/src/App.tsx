import { Suspense, lazy } from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));

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
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
