import { useSearchParams } from "react-router-dom";

const Filters = () => {
  const homeFilters = [
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
    setSearchParams({ filter });
  };

  return (
    <div className="mt-6 space-x-4">
      {homeFilters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => handleFilter(filter.name)}
          className={`py-2 px-4 rounded-lg ${
            activeFilter === filter.name
              ? "bg-secondary text-white"
              : "bg-gray-200"
          }`}
        >
          {filter.name.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default Filters;
