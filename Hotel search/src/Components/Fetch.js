import { useEffect, useState } from 'react';
import { API_URL } from '../Constants/API_URL';
import Axios from './Axios';

const Fetch = () => {

    //Methods of fetching data from API and displaying

    //Method 1: using javascript fetch function
        const [ApiData, setApidata] = useState([]);
        useEffect(() => {
            fetchApi();
        }, []);
        const fetchApi=()=>{
            return fetch(API_URL)
            .then((Response)=>Response.json())
            .then((Data)=>setApidata(Data))
        }
       

    // display
     return <div>
        <h3>fetching Data using javascript Fetch function</h3>
        {ApiData.map((item, index)=>{
           return <p key={index}>{item.name}</p>
        })
        }
         </div>
}
    
  
export default Fetch