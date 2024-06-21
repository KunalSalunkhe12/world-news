import { INews } from "@/types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useFetchNews = (
  currentPage: number,
  filter: string,
  number: number,
  search?: string | null
) => {
  const [articles, setArticles] = useState<INews[]>([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const baseUrl = import.meta.env.VITE_NEWS_API_URL;
        const url = new URL(baseUrl);
        const offset = (currentPage - 1) * 12;

        // Due to the API's limitation, we can't search for articles with less than 3 characters
        if (search && search.length < 3) {
          search = null;
        }

        const params = new URLSearchParams({
          text: filter + (search ? ` ${search}` : ""),
          language: "en",
          offset: offset.toString(),
          number: number.toString(),
          "api-key": import.meta.env.VITE_NEWS_API_KEY,
        });

        url.search = params.toString();

        const response = await fetch(url);
        if (response.status === 402) {
          alert("API key limit exceeded, please try again later");
        }

        const { news } = await response.json();
        setArticles(news);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      }
      setLoading(false);
    };

    fetchArticles();
  }, [filter, currentPage, number, search, location]);

  return { articles, loading };
};

export default useFetchNews;
