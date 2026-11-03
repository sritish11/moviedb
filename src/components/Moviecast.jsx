import React from 'react'
import Image from './Image';
import ErrorBoundary from '../ErrorBoundary';


function Moviecast(props) {
 console.log(props);
 
 
  return (
     <div className="w-6xl mx-auto p-3 ">
      <h1 className="uppercase text-center p-4 text-3xl">Movie Cast Info</h1>
      <div className=" grid grid-cols-9 gap-3 mt-3 mb-3">
      {
        props.cast && props.cast.map(val=>
          <figure>
            <ErrorBoundary>
              <Image p1={val.profile_path} />
            </ErrorBoundary>
            <figcaption>
              <h4>{val.name}</h4>
            </figcaption>
          </figure>
      )}
    </div>  
    </div>
  )
}

export default Moviecast