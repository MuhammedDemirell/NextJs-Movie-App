"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Movies = ({ dt }) => {
  const router = useRouter();
  console.log(router)

  console.log(dt, "dt");
  return (
    <div
      onClick={() => router.push(`/movie/${dt?.id}`)}
      className="min-w-[440] relative imgContainer cursor-pointer"
    >
      {/* <Image fill src={`https://api.themoviedb.org/3/${dt?.backdrop_path || dt?.poster_path}/images?api_key=9f50128052f555398154e28532f19b91&language=en-US`} /> */}
      <Image
        style={{ObjectFit:'cover'}}
        width={440}
        height={300}
        src={`https://image.tmdb.org/t/p/original/${
          dt.backdrop_path || dt.poster_path
        }`}
      />
      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity">
        <div className="text-2xl font-bold">{dt.title}</div>
        <div>
          {dt.release_date} - {dt.vote_average}
        </div>
      </div>
    </div>
  );
};

export default Movies;
