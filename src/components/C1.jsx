import React, { useRef, useState } from 'react'
import C2 from './C2'
import  mycontext  from '../context/mycontext'

function C1() {

  let[name,setName] = useState('Akshay');
  let[city,setCity] = useState('Mumbai');
  let x1 = useRef();
  let x2= useRef();

  function myfunc(){
    setName(x1.current.value);
    
  }

  function myfunc1(){
    setCity(x2.current.value);
    
  }

  return (
    <div className= 'w-6xl mx-auto p-3 border'>
      <h1 className='text-2xl text-center'>Props Drilling (C1)</h1>
      <input type='text' className='border' ref={x1} />
      <button className='border' onClick={myfunc}>Enter</button>

      <br/>

      <input type = 'text' className='border' ref={x2} />
      <button className='border' onClick={myfunc1}>Enter City</button>
      <mycontext.Provider value={city}>
        <C2 p1={name} />
      </mycontext.Provider>
      
      
    </div>
  )
}

export default C1