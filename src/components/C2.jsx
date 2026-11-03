import React from 'react'
import C3 from './C3'

function C2({p1}) {
  return (
    <div className='p-3 border'>C2
    
    <C3 p2={p1} />
    </div>
  )
}

export default C2