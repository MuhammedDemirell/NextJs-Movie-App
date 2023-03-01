import React from "react";
import Image from "next/image";

const getMovie = async (id) => {
  const res=  await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9f50128052f555398154e28532f19b91&language=en-US
  `)
  return await res.json();
};
const Page = async ({ params }) => {
  const id = params.id;
  const moiveDetail = await getMovie(id);

  console.log(moiveDetail, " movidetails");
  return (
  <div className="relative p-7 min-h-screen">
    <Image
      style={{ObjectFit:'cover'}}
        fill
        src={`https://image.tmdb.org/t/p/original/${
          moiveDetail.backdrop_path || moiveDetail.poster_path
        }`}
      />
      <div className="absolute">
        <div className="text-3xl font-bold my-3">{moiveDetail?.title}</div>
        <div className="w-1/2">{moiveDetail?.overview}</div>
        <div className="my-3">   {moiveDetail.release_date} - {moiveDetail.vote_average}</div>
        <div className=" my-2 border w-32 hover:bg-white hover:text-black p-2 roundend-md text-center text-lg cursor-pointer">Trail</div>


      </div>
  </div>
  )
};

export default Page;
