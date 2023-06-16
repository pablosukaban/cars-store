import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/redux.js";
import { carSlice } from "../store/carsSlice.js";

const Pagination = () => {
  const { totalCount, limit, currentPage } = useSelector((state) => state.car);
  const dispatch = useAppDispatch();
  const { setCurrentPage, increasePageByOne, decreasePageByOne } = carSlice.actions;

  const pageCount = Math.ceil(totalCount / limit);

  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  const setPage = (givenPage) => {
    dispatch(setCurrentPage(givenPage));
  };

  const nextPage = () => {
    dispatch(increasePageByOne());
  };

  const prevPage = () => {
    dispatch(decreasePageByOne());
  };

  return (
    <nav className={"mt-8 self-end"}>
      <ul className="inline-flex -space-x-px">
        <li>
          <button
            onClick={prevPage}
            className="ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            Прошлая
          </button>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <button
              className={`ml-0 border border-gray-300 px-3 py-2 leading-tight ${
                page === currentPage
                  ? "bg-primaryOrange text-black"
                  : "bg-white text-gray-500 hover:bg-gray-100  hover:text-gray-700 "
              }`}
              onClick={() => setPage(page)}>
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={nextPage}
            className="ml-0 rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            Следующая
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
