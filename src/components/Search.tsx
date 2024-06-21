import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams((searchParams) => {
      searchParams.delete("filter");
      searchParams.set("search", e.target.value);
      return searchParams;
    });

    if (e.target.value === "") {
      setSearchParams({ page: "1" });
    }
  };

  return (
    <div className="flex items-center gap-2 border p-2 rounded-lg flex-1 w-full sm:max-w-[450px] self-end">
      <FaSearch size={20} />
      <input
        value={search || ""}
        onChange={handleSearch}
        type="text"
        placeholder="Search for news"
        className="border-none w-full outline-none"
      />
    </div>
  );
};

export default Search;
