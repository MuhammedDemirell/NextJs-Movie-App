import Movies from "@/components/Movies";
import React from "react";

const Page = async({searchParams}) => {
    const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}?api_key=9f50128052f555398154e28532f19b91&language=en-US&page=1`, {
        // additional options can be added here
        next: {
          revalidate: 1000
        }
      });
          const data =await res.json();
 

    console.log(data,"sarch")
  return (
    <div className="flex items-center flex-wrap gap-3 justify-center">
        {
            data?.results?.map((dt,i)=>(
                <Movies key={i} dt={dt}/>

            ))
        }
      
    </div>
  ); 
};

export default Page;
