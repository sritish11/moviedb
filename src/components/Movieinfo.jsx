import React from 'react'

function Movieinfo(props) {

  return (
    <div className="w-6xl mx-auto p-3 ">
      <h1 className="uppercase text-center p-4 text-3xl">Movie Info</h1>
      <div className=" grid grid-cols-[80%_20%] gap-5 mt-3 mb-3">
     <div>
      <h1 className="text-3xl">{props.info.title}</h1>
      <p className='pt-3 pb-3'>
        <b>Description: </b> <br />
        {props.info.overview}
      </p><p className='pt-3 pb-3'>
        <i>{props.info.tagline}</i>
      </p>
      <p>
        Release Date : {props.info.release_date}
      </p>
      <p>
        Movie Status : {props.info.status}
      </p>
      <p>
        Rating : {props.info.vote_average} / 10
      </p>
     </div>
     <figure>
            <img src={import.meta.env.VITE_IMAGE_PATH + props.info.poster_path} className="w-full"/>
        </figure>
    </div>  
    </div>
  )
}

export default Movieinfo