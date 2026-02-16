type props = {
  page: number;
  onPageChange: (page: number) => void;
  totalPages: number;
};

const Pagination = ({ page, onPageChange, totalPages }: props) => {
  return (
    <section className="flex justify-center mt-4 gap-3">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="mr-2"
      >
        Prev
      </button>
      <span>{page}</span>
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </section>
  );
};

export default Pagination;
