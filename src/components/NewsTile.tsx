import { Link } from "react-router-dom";
import { formatDate } from "../utils";

interface NewsTileProps {
  news: {
    id: number;
    image: string;
    title: string;
    publish_date: string;
  };
  filter?: string;
}
const NewsTile = ({ news, filter }: NewsTileProps) => {
  return (
    <Link to={`/news/${news.id}`} state={{ news, filter }}>
      <div className="flex rounded-lg bg-gray-100">
        <img
          className="object-cover w-32 aspect-video rounded-l-lg"
          src={news.image || "/images/news-placeholder.webp"}
          alt={news.title}
          onError={(e) => {
            e.currentTarget.src = "/images/news-placeholder.webp";
          }}
        />
        <div className="space-y-2 p-2">
          <p className="text-sm text-gray-600">
            {formatDate(news.publish_date)}
          </p>
          <h3 className="line-clamp-2 text-ellipsis">{news.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default NewsTile;
