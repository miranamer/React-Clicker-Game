import React from 'react'

const MineCard = ({img, text, gold, setGold, goldRate, nugget_prob, nugget_multiplier}) => {



  const handleGold = () => {
    var nugget = Math.floor(Math.random() * nugget_prob) + 1; // starts at 1, 7 => 1/6 because exclusive max => 17%
    const nugget_rate = parseInt(((nugget_multiplier * goldRate) + goldRate) + gold);
    nugget === 1 ? setGold(nugget_rate) : setGold(gold + goldRate);
  }

  return (
    <>
        
          <div onClick={() => handleGold()} className="w-[260px] h-[350px] bg-gray-500 relative rounded-md border-[3px] border-cyan-300 hover:cursor-pointer">
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