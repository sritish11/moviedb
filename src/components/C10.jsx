import React, { useRef, useState } from 'react'
import C11 from './C11';
import  mycontext  from '../context/mycontext'

function C10() {

   let[product,setProduct] = useState('');
   let x1 = useRef();

   function myfunc(){
    setProduct(x1.current.value);
    
  }

  return (
    <div className= 'w-6xl mx-auto p-3 border'>
      <h1 className='text-2xl text-center'>Task</h1>
      <input type='text' className='border' ref={x1} />
      <button className='border' onClick={myfunc}>Enter Product</button>

      <br/>

      <mycontext.Provider value={product}>
        <C11/>
      </mycontext.Provider>
      
      
    </div>
  )
}

export default C10