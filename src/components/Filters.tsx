import { useSearchParams } from "react-router-dom";

const Filters = () => {
  const homeFilters = [
    { id: 1, name: "general" },
    { id: 2, name: "education" },
    { id: 3, name: "business" },
    { id: 4, name: "technology" },
    { id: 5, name: "health" },
    { id: 7, name: "sports" },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get("filter");

  console.log(activeFilter);

  const handleFilter = (filter: string) => {
    if (filter === "general") {
      return setSearchParams({ page: "1" });
    }
    setSearchParams((searchParams) => {
      searchParams.set("filter", filter);
      searchParams.set("page", "1");
      return searchParams;
    });
  };

  return (
    <div className="max-md:overflow-x-scroll">
      <div className="mt-6 space-x-4 w-[650px]">
        {homeFilters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => handleFilter(filter.name)}
            className={`py-2 px-4 rounded-lg ${
              activeFilter === filter.name ||
              (!activeFilter && filter.name === "general")
                ? "bg-secondary text-white"
                : "bg-gray-200"
            }`}
          >
            {filter.name.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;
