import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
     const data = useLoaderData()
   // const [data, setData] = useState({})
   // useEffect(() => {
   //     fetch('https://api.github.com/users/NeelSoni20')
   //     .then(response => response.json())
   //     .then(data=>{
   //         console.log(data);
   //         setData(data)
   //     })
   // },[])
  return (
    <div className='text-center m-4 bg-gray-600  text-white p-4 text-3xl'>Gituhb Followers:{data.followers}
    <img src= {data.avatar_url} alt="Git_Picture" width={300} />
    </div>
  )
}

export const githubinfoloader = async () =>{
    const respone = await fetch('https://api.github.com/users/NeelSoni20')
    return respone.json()
}
