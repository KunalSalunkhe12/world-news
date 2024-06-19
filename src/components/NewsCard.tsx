import { Link } from "react-router-dom";

interface NewsCardProps {
  news: {
    id: number;
    text: string;
    title: string;
    url: string;
    image: string;
    summary: string;
    author: string;
    publish_date: string;
  };
}
const NewsCard = ({ news }: NewsCardProps) => {
  console.log(news);
  return (
    <Link
      to={`/news/${news.id}`}
      className="cursor-pointer shadow-2xl rounded-lg flex flex-col"
    >
      <img
        className="object-cover h-48 w-full rounded-t-lg"
        src={news.image}
        alt={news.title}
      />
      <div className="p-4 flex-1 flex flex-col gap-4">
        <h2 className="line-clamp-2 text-ellipsis text-lg font-medium">
          {news.title}
        </h2>
        <p className="text-gray-600 text-sm">
          {news.text.slice(0, 200) + "..."}
          <span className="text-blue-500"> more</span>
        </p>
        <p className="mt-auto self-end text-sm text-gray-500">{news.author}</p>
      </div>
    </Link>
  );
};

export default NewsCard;
