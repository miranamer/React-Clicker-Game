import React from 'react'

const ShopCard = ({img, text, setShop}) => {
  return (
    <>
        
          <div onClick={() => setShop(true)} className="w-[260px] h-[350px] bg-gray-500 relative rounded-md border-[3px] border-cyan-300 hover:cursor-pointer">
            <div className="w-full flex items-center justify-center mt-8">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Gold_coin_icon.png" alt="" className='w-[200px] h-[200px]' />
            </div>
            <div className="w-full h-[80px] bg-yellow-500 absolute bottom-0 rounded-sm border-t-[3px] border-cyan-300">
                <div className="flex items-center justify-center w-full h-full">
                    <h1 className='text-white font-bold text-xl'>{text}</h1>
                </div>
            </div>
          </div>
        
    </>
  )
}

export default ShopCard