import Filters from "@/components/Filters";
import NewsCard from "@/components/NewsCard";
import Pagination from "@/components/Pagination";
import SkeletonLoading from "@/components/SkeletonLoading";
import { useSearchParams } from "react-router-dom";
import useFetchNews from "@/utils/useFetchNews";
import Search from "@/components/Search";

const Home = () => {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "";
  const currentPage = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search");

  // const loading = false;

  const { articles, loading } = useFetchNews(currentPage, filter, 12, search);

  return (
    <section className="h-screen">
      <div className="flex flex-col gap-4 lg:flex-row mt-6 justify-between">
        <Filters />
        <Search />
      </div>
      <h1 className="text-2xl font-semibold my-6">Latest News</h1>
      {loading ? (
        <SkeletonLoading />
      ) : articles.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-14 pb-10">
            {articles.map((news) => (
              <NewsCard key={news.id} news={news} filter={filter} />
            ))}
          </div>
          <Pagination />
        </>
      ) : (
        <h2 className="text-center text-2xl mt-20">No news found</h2>
      )}
    </section>
  );
};

export default Home;
