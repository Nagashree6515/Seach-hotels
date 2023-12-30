import React, { useEffect, useState } from 'react'
import { API_URL } from '../Constants/API_URL';
import axios from 'axios';

const Axios = () => {
    const [axiosData, setaxiosData] = useState([]);
    useEffect(()=>{
        fetchData();
      },[])
    const fetchData=()=>{
        return axios.get(API_URL).then((Data)=>setaxiosData(Data.data));
        
    }
    
    
  
  return <div>
    <h3>Fetching data using axios library</h3>
        {axiosData.map((item,index)=>{
            return <p key={index}>{item.name}</p>
        })}
    </div>
}

export default Axios