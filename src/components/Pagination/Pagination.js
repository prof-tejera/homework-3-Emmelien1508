import './Pagination.css';

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)
    const nextPage = () => {
            if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <div className="pagination-container">
            <div className='pagination justify-content-center'>
                <div className="page-item">
                    <p className="page-link prev" onClick={prevPage}>
                        Previous
                    </p>
                </div>
                {pageNumbers.map(pgNumber => (
                    <div key={pgNumber} className= {`page-item ${currentPage === pgNumber ? 'active' : ''} `} >
                        <p onClick={() => setCurrentPage(pgNumber)} className='page-link'>
                            {pgNumber}
                        </p>
                    </div>
                ))}
                <div className="page-item">
                    <p className="page-link next" onClick={nextPage}>
                        Next
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Pagination