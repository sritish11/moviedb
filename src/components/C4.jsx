import React, { useContext } from 'react'
import mycontext from '../context/mycontext'

function C4({p3}) {
  let valueFromContext = useContext(mycontext);

  return (
    <div className='p-3 border'>C4 {p3}

    <hr />

    <mycontext.Consumer>
      {value=>
        <p>{value}</p>
      }
    </mycontext.Consumer>

    <hr />
    <p>{valueFromContext}</p>
    </div>
  )
}

export default C4