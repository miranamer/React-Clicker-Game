import React from 'react'

const LeaderboardStyle = ({name}) => {
  return (
    <>
        <div className="w-[700px] h-[60px] bg-green-500 drop-shadow-md">
            <div className=" flex items-center justify-center h-full w-full">
                <h1 className=' text-white text-3xl font-bold drop-shadow-lg'>{name}</h1>
            </div>
        </div>
    </>
  )
}

export default LeaderboardStyle