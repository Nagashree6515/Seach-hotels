import React, { useEffect, useState } from 'react'
import { API_URL } from '../Constants/API_URL';

const Asyncawait = () => {
    const [Data, setData]=useState([]);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async ()=>{
        const Response=await fetch(API_URL);
        const data=await Response.json();
        setData(data?.data);
        console.log(data);
    }

  return (
    <div>Asyncawait</div>
  )
}

export default Asyncawait