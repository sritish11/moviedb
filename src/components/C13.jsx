import React, { useContext } from 'react'
import mycontext from '../context/mycontext'

function C13() {
  let valueFromContext = useContext(mycontext);
  return (
    <div className='p-3 border'>C13
    <hr />
    <p>{valueFromContext}</p>
    </div>
  )
}

export default C13