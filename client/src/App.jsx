import { useEffect } from "react";
import { useAppDispatch } from "./hooks/redux";
import { check } from "./http/userAPI";
import { userSlice } from "./store/userSlice";
import { carSlice } from "./store/carsSlice";
import { fetchAllCars, fetchBrands, fetchModels } from "./http/carAPI";
import CustomRoutes from "./pages/Routes";

const App = () => {
  const { setIsAuth, setUser } = userSlice.actions;
  const { setBrands, setCars, setModels } = carSlice.actions;
  const dispatch = useAppDispatch();
  useEffect(() => {
    check().then((data) => {
      dispatch(setIsAuth(true));
      dispatch(setUser(data));
    });
  }, [dispatch, setIsAuth, setUser]);
  useEffect(() => {
    fetchModels().then((data) => dispatch(setModels(data)));
    fetchBrands().then((data) => dispatch(setBrands(data)));
    fetchAllCars().then((data) => dispatch(setCars(data.rows)));
  }, [dispatch, setBrands, setCars, setModels]);

  return (
    <div className="relative min-h-screen scroll-smooth">
      <CustomRoutes />
    </div>
  );
};

export default App;
