import React, {useEffect, useState} from 'react'
import Productcard from './Productcard';
import useFetchapi from '../customHooks/useFetchapi';

function Home() {

  let apidata = useFetchapi(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_APP_KEY}&language=en-US&page=1`);
   
  // console.log(apidata);


    

  return (
    <div className="w-6xl mx-auto p-3 text-3xl">
      <h1 className="uppercase text-center p-4">Popular Movies</h1>
      <div className=" grid grid-cols-4 gap-15 mt-3 mb-3">
      {
        apidata && apidata.map(val=>
          <Productcard title={val.title} 
          id={val.id}
          path={val.poster_path} 
          desc={val.overview} 
          date={val.release_date} 
          rating={val.vote_average} 
          />
        )
      }
    </div>  
    </div>
  )
}

export default Home;