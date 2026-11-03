import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Productcard from './Productcard';

function Searchmovie() {

  let dataFromUrl = useParams();
  console.log(dataFromUrl);

  let[apidata,setApidata] = useState([]);
  useEffect(()=>{
    // console.log('call api for',dataFromUrl.moviedata);

    let apiPath = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_APP_KEY}&language=en-US&query=${dataFromUrl.moviedata}&page=1`;

    axios
    .get(apiPath)
      .then(res=>{
        console.log(res.data.results);
        setApidata(res.data.results);
      })
      .catch(err=>{
        console.log(err);
      })

  },[dataFromUrl.moviedata])

  return (
    <div className="w-6xl mx-auto p-3 text-3xl">
      <h1 className="uppercase text-center p-4">Movie Name: {dataFromUrl.moviedata}</h1>
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

export default Searchmovie;