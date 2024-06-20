interface NewsTileProps {
  news: {
    image: string;
    title: string;
    publish_date: string;
  };
}
const NewsTile = ({ news }: NewsTileProps) => {
  return (
    <div className="flex gap-3 rounded-lg bg-gray-100 p-2">
      <img
        className="object-cover w-32 aspect-video rounded-lg"
        src={news.image || "/images/news-placeholder.webp"}
        alt={news.title}
        onError={(e) => {
          e.currentTarget.src = "/images/news-placeholder.webp";
        }}
      />
      <div className="space-y-2">
        <p className="text-sm text-gray-600">{news.publish_date}</p>
        <h3 className="line-clamp-2 text-ellipsis">{news.title}</h3>
      </div>
    </div>
  );
};

export default NewsTile;
