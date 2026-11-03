import React from 'react'

function Image(props) {

  if(props.p1 === null){
    throw new Error('Image not found');
  }

  return (
    <img src={import.meta.env.VITE_IMAGE_PATH +props.p1} className='w-full' />
  )
}

export default Image