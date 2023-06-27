import { useEffect, useRef, useState } from "react";
import CarsList from "../components/CarsList";
import SubHero from "../components/SubHero";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchAllCars, fetchBrands, fetchModels } from "../http/carAPI";
import { carSlice } from "../store/carsSlice";
import { motion } from "framer-motion";
import Pagination from "../components/Pagination.jsx";

const imageLink =
  "https://static.wixstatic.com/media/548a7f_34163ad1a8274771bb6513a513ff22e8.jpg/v1/fill/w_1500,h_701,al_c,q_85,enc_auto/548a7f_34163ad1a8274771bb6513a513ff22e8.jpg";

const ModelFilter = () => {
  const { models } = useAppSelector((state) => state.car);
  const dispatch = useAppDispatch();
  const { setCurrentModel } = carSlice.actions;

  const handleChange = (e) => {
    dispatch(setCurrentModel(e.target.value));
  };

  return (
    <select className="w-full rounded border px-4 py-2" placeholder="Модель машины" onChange={handleChange}>
      <option value="">Все модели</option>
      {models.map((model) => (
        <option key={model.id} value={model.id}>
          {model.car_model_name}
        </option>
      ))}
    </select>
  );
};

const BrandFilter = () => {
  const { brands } = useAppSelector((state) => state.car);
  const dispatch = useAppDispatch();
  const { setCurrentBrand } = carSlice.actions;

  const handleChange = (e) => {
    dispatch(setCurrentBrand(e.target.value));
  };

  return (
    <select className="w-full rounded border px-4 py-2" placeholder="Марка машины" onChange={handleChange}>
      <option value="">Все марки</option>
      {brands.map((brand) => (
        <option key={brand.id} value={brand.id}>
          {brand.car_brand_name}
        </option>
      ))}
    </select>
  );
};

const PriceFromFilter = () => {
  const [priceFrom, setPriceFrom] = useState("");
  const dispatch = useAppDispatch();
  const { setCurrentPriceFrom } = carSlice.actions;

  const debounceTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(debounceTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    debounceTimeoutRef.current = setTimeout(() => {
      dispatch(setCurrentPriceFrom(priceFrom));
      // console.log(priceFrom)
    }, 300);

    return () => {
      clearTimeout(debounceTimeoutRef.current);
    };
  }, [priceFrom, dispatch, setCurrentPriceFrom]);

  return (
    <input
      value={priceFrom}
      onChange={(e) => setPriceFrom(e.target.value)}
      className="w-full rounded border p-2"
      placeholder="Цена, от"
      type="number"
    />
  );
};

const PriceToFilter = () => {
  const [priceTo, setPriceTo] = useState("");
  const dispatch = useAppDispatch();
  const { setCurrentPriceTo } = carSlice.actions;

  const debounceTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(debounceTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    debounceTimeoutRef.current = setTimeout(() => {
      dispatch(setCurrentPriceTo(priceTo));
    }, 300);

    return () => {
      clearTimeout(debounceTimeoutRef.current);
    };
  }, [priceTo, dispatch, setCurrentPriceTo]);

  return (
    <input
      value={priceTo}
      onChange={(e) => setPriceTo(e.target.value)}
      className="w-full rounded border p-2"
      placeholder="Цена, до"
      type="number"
    />
  );
};

const AllCars = () => {
  const { cars, currentPage, limit, currentModel, currentBrand } = useAppSelector((state) => state.car);

  const { setBrands, setCars, setModels, setTotalCount, setCurrentBrand, setCurrentModel, setCurrentPage } =
    carSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentPage(1));
    dispatch(setCurrentBrand(""));
    dispatch(setCurrentModel(""));

    fetchModels().then((data) => dispatch(setModels(data)));
    fetchBrands().then((data) => dispatch(setBrands(data)));
    fetchAllCars(null, null, 1, 6).then((data) => {
      dispatch(setCars(data.rows));
      dispatch(setTotalCount(data.count));
    });
  }, []);

  useEffect(() => {
    fetchAllCars(currentModel, currentBrand, currentPage, limit).then((data) => {
      dispatch(setCars(data.rows));
      dispatch(setTotalCount(data.count));
    });
  }, [currentPage, currentModel, currentBrand]);

  return (
    <motion.main>
      <SubHero imageLink={imageLink} mainText="Все автомобили" />
      <div className="bg-secondaryLightGray py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="mb-12 flex flex-col justify-between gap-2 rounded border bg-white p-6 shadow-sm">
            <h1 className="text-center text-2xl font-bold">Фильтр</h1>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <BrandFilter />
              <ModelFilter />
              <PriceFromFilter />
              <PriceToFilter />
            </div>
          </div>
          {cars.length > 0 ? (
            <>
              <CarsList givenArr={cars} />
            </>
          ) : (
            <>
              <h1 className={"text-center text-lg font-semibold"}>Ничего не найдено</h1>
            </>
          )}
          <Pagination />
        </div>
      </div>
    </motion.main>
  );
};

export default AllCars;
