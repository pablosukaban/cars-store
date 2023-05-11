import { useState } from 'react';
import { exapleCar } from '../pages/NewCars';

interface PaginationProps {
    itemsPerPage: number;
    totalItems: number;
}

interface UsePaginationReturn {
    currentPage: number;
    pages: number[];
    setCurrentPage: (pageNumber: number) => void;
    currentItems: exapleCar[];
}

const usePagination = (
    data: exapleCar[],
    paginationProps: PaginationProps
): UsePaginationReturn => {
    const { itemsPerPage, totalItems } = paginationProps;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const getPaginatedData = (): exapleCar[] => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex);
    };

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const currentItems = getPaginatedData();

    return {
        currentPage,
        pages,
        setCurrentPage,
        currentItems,
    };
};

export default usePagination;
