import { INews } from "@/types";
import { useEffect, useState } from "react";

const useFetchNews = (currentPage: number, filter: string, number: number) => {
  const [articles, setArticles] = useState<INews[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const baseUrl = import.meta.env.VITE_NEWS_API_URL;
        const url = new URL(baseUrl);
        const offset = (currentPage - 1) * 12;

        const params = new URLSearchParams({
          text: filter,
          language: "en",
          offset: offset.toString(),
          number: number.toString(),
          "api-key": import.meta.env.VITE_NEWS_API_KEY_2,
        });

        url.search = params.toString();

        const response = await fetch(url);
        const { news } = await response.json();
        setArticles(news);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      }
      setLoading(false);
    };

    fetchArticles();
  }, [filter, currentPage]);

  return { articles, loading };
};

export default useFetchNews;
