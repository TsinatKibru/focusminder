'use client'
import { auth } from '@clerk/nextjs/server'
import React, { useEffect } from 'react'

const Test = () => {
    const {userId} = auth()
    if (userId){
        console.log("userid",userId);
    }
    useEffect(()=>{console.log('userId',)},[userId])
  return (
    <div>
      
    </div>
  )
}

export default Test
