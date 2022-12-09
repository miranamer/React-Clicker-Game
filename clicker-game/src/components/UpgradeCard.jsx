import React from 'react'

const UpgradeCard = ({img, text, setUpgradeA}) => {
  return (
    <>
        
          <div onClick={() => setUpgradeA(true)} className="w-[260px] h-[350px] bg-gray-500 relative rounded-md border-[3px] border-cyan-300 hover:cursor-pointer">
            <img src={img} alt="" />
            <div className="w-full h-[80px] bg-green-500 absolute bottom-0 rounded-sm border-t-[3px] border-cyan-300">
                <div className="flex items-center justify-center w-full h-full">
                    <h1 className='text-white font-bold text-xl'>{text}</h1>
                </div>
            </div>
          </div>
        
    </>
  )
}

export default UpgradeCard