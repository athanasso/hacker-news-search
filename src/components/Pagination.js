const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    return (
        <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index + 1}
                    onClick={() => onPageChange(index + 1)}
                    disabled={currentPage === index + 1}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
