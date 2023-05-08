import { Suspense, lazy } from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home'));

const App = () => {
    return (
        <div>
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
        </div>
    );
};

export default App;
