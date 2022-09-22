import Pagination from 'components/Pagination/Pagination';
import React, { useState } from 'react';

const Pager = () => {
    const [currentPage, setCurrentPage] = useState(2);
    const nPages = 10

    return (
        <Pagination nPages = { nPages } currentPage = { currentPage } setCurrentPage = { setCurrentPage }/>
    )
};

export default Pager;