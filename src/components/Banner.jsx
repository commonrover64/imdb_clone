import axios from "axios";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    try {
      setLoader(true);
      const url = "https://api.themoviedb.org/3/trending/movie/day?";
      axios
        .get(url)
        .then((response) => response.json())
        .then((data) => console.log(data));

      const movieData = response?.data?.results?.slice(0, 5); // only top 5 movies for showing in Banner slide
      setMovies(
        movieData.map((movie) => {
          return {
            title: movie?.title,
            bannerImage: `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`,
          };
        })
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  });

  const handleLeft = () => {
    setCurrIndex((prev) => (prev == 0 ? movies.length - 1 : prev - 1));
  };

  const handleRight = () => {  
    setCurrIndex((prev) => (prev + 1) % movies.length);
  };

  return (
    <div>
      {loader ? (
        <div>Loading...</div>
      ) : (
        <>
          {movies?.length > 0 && (
            <div className="relative h-[50vh]">
              <div
                className="h-full bg-cover bg-center"
                style={{ background: `url(${movies[0]?.bannerImage})` }}
              >
                <div className="text-white w-full text-center text-2xl p-4 bg-black/80">
                  {movies[0].title}
                </div>
              </div>
              <button className="absolute left-2 top-1/2 text-white p-2 rounded-full bg-black/50">
                <ChevronLeft />
              </button>
              <button className="absolute right-2 top-1/2 text-white p-2 rounded-full bg-black/50">
                <ChevronRight />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Banner;
