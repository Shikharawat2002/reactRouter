import React, { useEffect, useState } from 'react'

export default function Github()
 {
  const [data , setData] = useState([])

  useEffect(()=>
  {
    fetch('https://api.github.com/users/shikharawat2002')
    .then(response=>response.json())
    .then(data=>{
      setData[data];
  })
},[])

  return (
    <>
    <div className='text-center m-4 bg-red-100 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    </>
  )
}

