import React from 'react'
import Movies from "@/components/Movies";

const page = async({params}) => {
    const keyword=params.keyword
    const res=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=9f50128052f555398154e28532f19b91&query=${keyword}&language=en-us&include_adult=false
    `)
    const data=await res.json();
    console.log(data?.results,"data")
  return (
    <div>
    {!data?.results ? 
      <div>Aranılan şey bulunamadı</div> 
      :
     <div className='flex items-center flex-wrap gap-2'> {
        data.results.map((dt, i) => (
            <Movies key={i} dt={dt} />
          ))}</div>
    }
  </div>
  
  )
}

export default page
