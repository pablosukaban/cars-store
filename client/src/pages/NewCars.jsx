import CarsList from "../components/CarsList";
import SubHero from "../components/SubHero";
import { useAppSelector } from "../hooks/redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const imageLink =
  "https://static.wixstatic.com/media/548a7f_0ed4e9a8699643c2b6d27de738532f47.jpg/v1/fill/w_1727,h_802,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/548a7f_0ed4e9a8699643c2b6d27de738532f47.jpg";

const NewCars = () => {
  const { cars } = useAppSelector((state) => state.car);

  // first nine cars
  const firstNineCars = cars.slice(0, 9);

  return (
    <motion.main className="relative">
      <SubHero imageLink={imageLink} mainText="Новые поступления" />
      <div className="w-full bg-secondaryLightGray py-16">
        <div className="mx-auto w-full max-w-7xl ">
          <CarsList givenArr={firstNineCars} />
          <div className={"grid w-full place-items-center"}>
            <Link to={"/all"} className="mt-10 bg-primaryOrange px-6 py-4 text-center text-lg font-semibold text-black">
              Все автомобили
            </Link>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default NewCars;
