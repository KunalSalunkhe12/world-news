import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");

  const [searchQuery, setSearchQuery] = useState(search || "");

  useEffect(() => {
    const debouncedSearch = setTimeout(() => {
      setSearchParams((searchParams) => {
        searchParams.delete("filter");
        searchParams.delete("page");
        searchParams.set("search", searchQuery);
        return searchParams;
      });

      if (searchQuery === "") {
        setSearchParams((searchParams) => {
          searchParams.delete("search");
          return searchParams;
        });
      }
    }, 500);

    return () => clearTimeout(debouncedSearch);
  }, [searchQuery, setSearchParams]);

  return (
    <div className="flex items-center gap-2 border p-2 rounded-lg flex-1 w-full sm:max-w-[450px] self-end">
      <FaSearch size={20} className="text-gray-400" />
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Search for news"
        className="border-none w-full outline-none"
      />
    </div>
  );
};

export default Search;
