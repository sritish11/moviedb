import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useFetchapi(apiPath){

  let [record,setRecord] = useState([]);

  useEffect(function(){

    // console.log(apiPath)
    axios.get(apiPath).then(res =>{
      // console.log(res.data.results);
      setRecord(res.data.results);
    })
    // api called
    setRecord([100,200,300,400,500])
  },[]);

  return record;

}