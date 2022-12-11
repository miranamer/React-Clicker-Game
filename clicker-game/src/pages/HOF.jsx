import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const HOF = ({gold, token, setToken, setGold}) => {

    const navigate = useNavigate()

    const [name, setName] = useState({
        name: "",
    });
    
    const handleChange = (e) => {
        setName({name: e.target.value})
    }

    const goHome = (e) => {
        e.preventDefault()
        navigate('/')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(token === 1){
            try{
                await axios.post("http://localhost:3002/names", name)
                .then(setToken(0))
                .then(setGold(gold - 1000000))
                e.preventDefault()
                navigate('/leaderboard')
            }catch(err){
                console.log(err.message)
            }
        }
        else{
            navigate('/')
            alert('Can Only Be Inducted Once!')
        }

    }

  if (gold === 1000000){return (
    <>
        <div className="bg-gray-700 w-full h-screen">
            <button onClick={goHome} className='text-red-400 border-2 border-red-200 py-2 px-4 rounded-md absolute top-4 left-4'>Home</button>
            <h1 className=' text-center py-10 text-3xl text-white'>Add Your Name</h1>
            <div className="flex justify-center items-center">
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} type="text" placeholder='Enter Your Name' className=' text-white text-center py-3 px-10 rounded-md border-[3px] border-gray-900 bg-black' />
                    <button className='bg-green-400 px-5 py-3 rounded-md ml-2 font-bold text-green-700 border-2 border-green-700'>Submit</button>
                </form>
            </div>
        </div>
    </>
  )}
  return <Navigate to='/' replace />
}

export default HOF