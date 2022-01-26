interface Props {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  view: "Characters" | "Episodes" | "Locations";
}

const Pagination: React.FC<Props> = ({ page, setPage, view }) => {
  let maxPage = 42;

  if (view === "Episodes") {
    maxPage = 3;
  } else if (view === "Locations") {
    maxPage = 100;
  }

  return (
    <div className="absolute bottom-0 mb-2 px-5 w-full flex justify-between text-sm">
      <button
        className={`${page === 1 ? "invisible" : ""}`}
        onClick={(e) => setPage(page - 1)}
      >
        Prev
      </button>
      <p className="">
        Page {page}/{maxPage}
      </p>
      <button
        className={`${page === maxPage ? "invisible" : ""}`}
        onClick={(e) => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
