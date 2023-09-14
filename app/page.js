"use client"
import axios from "axios"
import React, { useState } from 'react'

const page = () => {
  const [num, setNum] = useState([]);
  const getData = ()=>{
    const response = axios.get("https://picsum.photos/v2/list")
    .then(({data})=> setNum(data))
  }

  console.log(num);
  return (
    <div>
      <button className=" bg-green-400 font-bold border-red-300 text-white px-4 py-2 border-2 rounded text-3xl " onClick={getData}>Get Images</button>

      <div className=" w-[90%] flex justify-between m-auto flex-wrap ">

      {
      num.map((elem)=>{
       return <img className=" my-4 " key={elem.id}width={250} src={elem.download_url} alt={`img ${elem.id}`} />
      })

     }

      </div>
    
    </div>
  )
}

export default page


// Next Js me default me hi server side rendering hoti hai 