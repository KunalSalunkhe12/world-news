import { INews } from "@/types";
import { useLocation } from "react-router-dom";
import { formatDate } from "@/utils";
import { data } from "./Home";
import NewsTile from "@/components/NewsTile";

const NewsDetail = () => {
  const { state } = useLocation();
  const news = state.news as INews;

  return (
    <div className="my-6 lg:flex gap-4">
      <div className="w-full lg:w-[40rem] xl:w-[62rem]">
        <img
          className="w-full lg:h-[30rem] rounded-lg"
          src={news.image}
          alt={news.title}
          onError={(e) => {
            e.currentTarget.src = "/images/news-placeholder.webp";
          }}
        />
        <div className="my-3 space-y-4">
          <p className="md:text-lg font-semibold">{news.author}</p>
          <h1 className="text-2xl md:text-3xl font-bold">{news.title}</h1>
          <p className="bg-gray-300 py-2 px-4 rounded-lg inline-block text-sm">
            {formatDate(news.publish_date)}
          </p>
          <p>{news.text}</p>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-medium">
          Other Articles by {news.author}
        </h2>
        <div className="space-y-6 mt-4">
          {data.map((news) => (
            <NewsTile key={news.title} news={news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
