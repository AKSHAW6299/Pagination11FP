import React from 'react'

function Pagination({noOfPages, goToPrev, goToNext,handlePageChange, currentPage }) {
    return (
        <div className='pagination-container'>
            <button className='page-no' onClick={() => goToPrev()} disabled={currentPage === 0}>PREV</button>

            {[...Array(noOfPages).keys()].map((n) => (
                <span key={n} className={'page-no ' + (n === currentPage ? 'active' : '')} onClick={() => handlePageChange(n)}>
                    {n}
                </span>
            ))}

            <button className='page-no' onClick={() => goToNext()} disabled={currentPage === noOfPages}>NEXT</button>
        </div>
    )
}

export default Pagination