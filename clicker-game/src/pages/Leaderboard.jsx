import React, {useEffect, useState} from 'react'
import axios from 'axios'
import LeaderboardStyle from '../components/LeaderboardStyle';
import { Navigate, useNavigate } from 'react-router-dom';

const Leaderboard = () => {

    const [names, setNames] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchNames = async () => {
            try{
                const res = await axios.get("http://localhost:3002/names")
                setNames(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchNames()
    }, [])

    const goHome = (e) => {
        e.preventDefault()
        navigate('/')
    }

  return (
    <>
        <div className="relative bg-gray-700 w-full h-screen">
            <h1 className='text-white text-2xl font-bold text-center py-4'>Leaderboard</h1>
            <button onClick={goHome} className='text-red-400 border-2 border-red-200 py-2 px-4 rounded-md absolute top-4 left-4'>Home</button>
            <div className="flex flex-col gap-5 justify-center items-center mt-5">
                {names && names.map((item) => (<LeaderboardStyle key={item.id} name={item.name}/>))}
            </div>
        </div>
    </>
  )
}

export default Leaderboard