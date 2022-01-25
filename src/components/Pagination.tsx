interface Props {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<Props> = ({ page, setPage }) => {
  return (
    <div className="absolute bottom-0 mb-2 px-5 w-full flex justify-between text-sm">
      <button
        className={`${page === 1 ? "invisible" : ""}`}
        onClick={(e) => setPage(page - 1)}
      >
        Prev
      </button>
      <p className="">Page {page}/42</p>
      <button
        className={`${page === 42 ? "invisible" : ""}`}
        onClick={(e) => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
