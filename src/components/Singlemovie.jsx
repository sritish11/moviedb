import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Movieinfo from './Movieinfo';
import Moviecast from './Moviecast';

function  Singlemovie() {

  let[info,setInfo] = useState({});
  let[cast,setCast] = useState([]);

  let urlData = useParams();
  console.log(urlData);

  useEffect(()=>{
    console.log('api call for movie id',urlData.movieid);

    // https://api.themoviedb.org/3/movie/${urlData.movieid}?api_key=${import.meta.env.VITE_APP_KEY}&language=en-US

    // https://api.themoviedb.org/3/movie/${urlData.movieid}/credits?api_key=${import.meta.env.VITE_APP_KEY}&language=en-US

    Promise.allSettled([
      axios.get(`https://api.themoviedb.org/3/movie/${urlData.movieid}?api_key=${import.meta.env.VITE_APP_KEY}&language=en-US`),
      axios.get(`https://api.themoviedb.org/3/movie/${urlData.movieid}/credits?api_key=${import.meta.env.VITE_APP_KEY}&language=en-US`)
    ])
    .then(res=>{
        console.log(res[0].value.data);
        console.log(res[1].value.data.cast);
        
        setInfo(res[0].value.data);
        setCast(res[1].value.data.cast);
      })
      .catch(err=>{
        console.log(err);
      })
  },[urlData.movieid])

  return (
    <>
    <Movieinfo info={info} />
    <Moviecast cast={cast}/>
    </>
  )
}

export default Singlemovie;