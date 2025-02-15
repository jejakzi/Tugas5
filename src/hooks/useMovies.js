import { useState, useEffect } from "react";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "8426e2ff287732380b820b4b2617cb74";

const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const [nowPlayingRes, popularRes, topRatedRes, upcomingRes] =
          await Promise.all([
            fetch(`${API_URL}/movie/now_playing?api_key=${API_KEY}`),
            fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`),
            fetch(`${API_URL}/movie/top_rated?api_key=${API_KEY}`),
            fetch(`${API_URL}/movie/upcoming?api_key=${API_KEY}`),
          ]);

        setNowPlaying((await nowPlayingRes.json()).results || []);
        setPopular((await popularRes.json()).results || []);
        setTopRated((await topRatedRes.json()).results || []);
        setUpcoming((await upcomingRes.json()).results || []);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      } finally {
        setTimeout(() => setLoading(false), 3000);
      }
    };

    fetchMovies();
  }, []);

  return { nowPlaying, popular, topRated, upcoming, loading };
};

export default useMovies;
