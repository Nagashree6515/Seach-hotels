import React, { useEffect, useState } from 'react'
import { USER_DATA } from '../Constants/API_URL';

const Body = () => {
    const [Data, setData] = useState([]);
    const [filteredData, setfilteredData] = useState([]);
    
    const [searchText, setsearchText] = useState("");
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=()=>{
        return fetch(USER_DATA)
        .then((Response)=>Response.json())
        .then((data)=>[setData(data),
        setfilteredData(data)])

    }
    console.log("api: ", filteredData)
   
  return (
    <div className="body">
        <div className="header">
        <input className="input" value={searchText} placeholder="Search a hotel.."
        onChange={(e)=>setsearchText(e.target.value)}>
        </input>
        <button className="search" onClick={()=>
        {
          const filteredData=Data.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase()) || res.id.includes(searchText)
          
        )
        setfilteredData(filteredData)

       console.log("filtered: ", filteredData)
        }}>
          Search</button>

        </div>
        <input type="text" className="price" value="favorites"></input>
        <input type="text" className="price" value="Price" onClick={()=>{ 
          // sort the hotels using price
          const filteredpricelist = [...Data].sort((a,b)=>a.price - b.price)

          // filter hotels based on price
          // const filteredpricelist = Data.filter((res)=>res.price<5000)
          setfilteredData(filteredpricelist)
          console.log(filteredpricelist)
        }}></input>
        {filteredData.map((item,index)=>{
         return <div key={index} className="card">
           <img src={item.image} className="image"/>
           <p><b>{item.name}</b></p>
           <p><b>${item.price}</b></p>
           {item.freeBreakfast==true? <p className="breakfast"><b>Free Breakfast </b></p>: <p></p>}
         </div> 
        })
    }
    </div>
  )
}

export default Body