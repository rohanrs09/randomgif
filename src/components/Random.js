import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

  const {gif,loading,fetchData} = useGif();


  return (
    <div className=' w-1/2 bg-green-500 rounded-lg border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-2xl underline uppercase font-bold'>A Random Gif</h1>

        {
          loading ? (<Spinner/>):(<img src={gif} width="450"/>)
        }
        
        <button className='w-10/12 bg-blue-500 rounded-lg text-lg py-2 mb-[15px]' onClick={()=>fetchData()}>Generate</button> 

    </div>
  )
}

export default Random