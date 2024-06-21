import { INews } from "@/types";
import { Link } from "react-router-dom";

const NewsCard = ({ news, filter }: { news: INews; filter: string }) => {
  return (
    <Link
      to={`/news/${news.id}`}
      className="cursor-pointer shadow-2xl rounded-lg flex flex-col"
      state={{ news, filter }}
    >
      <img
        className="object-cover h-48 w-full rounded-t-lg"
        src={news.image || "/images/news-placeholder.webp"}
        onError={(e) => {
          e.currentTarget.src = "/images/news-placeholder.webp";
        }}
        alt={news.title}
      />
      <div className="p-4 flex-1 flex flex-col gap-4">
        <h2 className="line-clamp-2 text-ellipsis text-lg font-medium">
          {news.title}
        </h2>
        <p className="text-gray-600 text-sm">
          {news.text.slice(0, 200) + "..."}
          <span className="text-secondary"> more</span>
        </p>
        <p className="mt-auto self-end text-sm text-gray-500">{news.author}</p>
      </div>
    </Link>
  );
};

export default NewsCard;
