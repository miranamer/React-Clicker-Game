import React from 'react'

const MineCard = ({img, text, gold, setGold}) => {
  return (
    <>
        
          <div onClick={() => setGold(gold + 10)} className="w-[260px] h-[350px] bg-gray-500 relative rounded-md border-[3px] border-cyan-300 hover:cursor-pointer">
            <img src={img} alt="" />
            <div className="w-full h-[80px] bg-blue-700 absolute bottom-0 rounded-sm border-t-[3px] border-cyan-300">
                <div className="flex items-center justify-center w-full h-full">
                    <h1 className='text-white font-bold text-xl'>{text}</h1>
                </div>
            </div>
          </div>
        
    </>
  )
}

export default MineCard