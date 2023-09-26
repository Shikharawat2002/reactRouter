import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    //to use user id import useParams
    <div className={'bg-pink-700 text-center text-white'}>User: {userid}</div>
  )
}

export default User