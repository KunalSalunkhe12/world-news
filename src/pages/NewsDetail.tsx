import { INews } from "@/types";
import { useLocation } from "react-router-dom";
import { formatDate } from "@/utils";
import NewsTile from "@/components/NewsTile";
import SkeletonLoadingTiles from "@/components/SkeletonLoadingTiles";
import useFetchNews from "@/utils/useFetchNews";
import { data } from "./Home";

const NewsDetail = () => {
  const { state } = useLocation();
  const currentNews = state.news as INews;
  const filter = state.filter as string;

  const loading = false;

  // const { articles, loading } = useFetchNews(1, filter, 5);

  return (
    <div className="my-6 lg:flex gap-4">
      <div className="w-full lg:w-[40rem] xl:w-[62rem]">
        <img
          className="w-full lg:h-[30rem] rounded-lg object-cover object-center"
          src={currentNews.image || "/images/news-placeholder.webp"}
          alt={currentNews.title}
          onError={(e) => {
            e.currentTarget.src = "/images/news-placeholder.webp";
          }}
        />
        <div className="my-3 space-y-4">
          <p className="md:text-lg font-semibold">{currentNews.author}</p>
          <h1 className="text-2xl md:text-3xl font-bold">
            {currentNews.title}
          </h1>
          <p className="bg-gray-300 py-2 px-4 rounded-lg inline-block text-sm">
            {formatDate(currentNews.publish_date)}
          </p>
          <p>{currentNews.text}</p>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-medium">Related articles</h2>
        <div className="space-y-6 mt-4">
          {loading ? (
            <SkeletonLoadingTiles />
          ) : (
            data &&
            data.map((news) => (
              <NewsTile key={news.title} news={news} filter={filter} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
