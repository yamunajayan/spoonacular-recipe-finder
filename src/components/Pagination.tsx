type props = {
  page: number;
  onPageChange: (page: number) => void;
  totalPages: number;
};

const Pagination = ({ page, onPageChange, totalPages }: props) => {
  if (totalPages <= 1) {
    return null;
  }
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // ----- calculate visible pages -----
  let start = page - 2;
  let end = page + 2;

  if (start < 1) {
    end += 1 - start;
    start = 1;
  }

  if (end > totalPages) {
    start -= end - totalPages;
    end = totalPages;
  }

  start = Math.max(1, start);

  const visiblePages = pages.slice(start - 1, end);

  return (
    <section className="flex justify-center my-10 gap-3 items-center ">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="w-7 h-7 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white text-red-800 border-red-800 border-3 hover:bg-red-800! hover:text-white!"
      >
        ◀
      </button>
      {/* Visible Pages */}
      <div className="flex gap-2">
        {start > 1 && <span className="text-xl text-red-800">…</span>}
        {visiblePages.map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`w-7 h-7 md:w-10 md:h-10 flex items-center justify-center rounded-full border-3 border-red-800 hover:bg-red-800! hover:text-white! text-xl text-red-800 shadow ${
              p === page ? "bg-red-800 text-white" : "bg-white"
            }`}
          >
            {p}
          </button>
        ))}
        {end < totalPages && <span className="text-xl text-red-800">...</span>}
      </div>
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="w-7 h-7 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white text-red-800 border-red-800 border-3 hover:bg-red-800! hover:text-white!"
      >
        ▶
      </button>
    </section>
  );
};

export default Pagination;
