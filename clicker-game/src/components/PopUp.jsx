import React from 'react'
import { useState } from 'react';

const PopUp = (props) => {

    const [items, setItems] = useState([1, 2, 3, 4]);

    const handleOne = () => { // do this for other items
        setItems(items.filter(item => item !== 1));
        const newRate = (0.1 * props.goldRate) + props.goldRate
        props.setGoldRate(newRate);
    }


  return (props.trigger) ?  (
    <>
        <div className="fixed top-0 left-0 w-full h-screen bg-black/60 flex justify-center items-center">
            <div className="relative p-5 w-[900px] h-[600px] bg-white">
                <h1 className='text-2xl font-bold text-center'>Shop</h1>
                <p onClick={() => props.setShop(false)} className='absolute top-2 right-5 text-3xl hover:cursor-pointer'>X</p>
                
                {items.length === 0 ? <h1 className=' text-2xl text-center mt-20'>Shop Is Empty!</h1> : <>{items.includes(1) ? <div className="drop-shadow-lg relative w-full h-[75px] bg-sky-300 mt-20 flex items-center">
                    <button className='text-sky-600  border-sky-600 px-3 py-2 rounded-md absolute left-4'>Common</button>
                    <h1 className='absolute text-2xl left-[33%] text-sky-600 font-bold'>10% Increased Mining Speed</h1>
                    <button onClick={() => handleOne()} className='text-sky-600  border-sky-600 px-4 py-2 rounded-md border-2 absolute right-4'>100G</button>
                </div> : null}
                
                {items.includes(2) ?  <div className=" drop-shadow-lg relative w-full h-[75px] bg-yellow-300 mt-10 flex items-center">
                    <button className='text-yellow-600  border-yellow-600 px-7 py-2 rounded-md absolute left-4'>Rare</button>
                    <h1 className='absolute text-2xl left-[35%] text-yellow-600 font-bold'>Item2</h1>
                    <button onClick={() => setItems(items.filter(item => item !== 2))} className='text-yellow-600  border-yellow-600 px-4 py-2 rounded-md border-2 absolute right-4'>200G</button>
                </div> : null}
                
                {items.includes(3) ? <div className="drop-shadow-lg relative w-full h-[75px] bg-purple-300 mt-10 flex items-center">
                    <button className='text-purple-600  border-purple-600 px-7 py-2 rounded-md absolute left-4'>Splendid</button>
                    <h1 className='absolute text-2xl left-[35%] text-purple-600 font-bold'>Item3</h1>
                    <button onClick={() => setItems(items.filter(item => item !== 3))} className='text-purple-600  border-purple-600 px-4 py-2 rounded-md border-2 absolute right-4'>1000G</button>
                </div> : null}
                
                {items.includes(4) ? <div className="drop-shadow-lg relative w-full h-[75px] bg-red-300 mt-10 flex items-center">
                    <button className='text-red-600  border-red-600 px-7 py-2 rounded-md absolute left-4'>Ultra-Rare</button>
                    <h1 className='absolute text-2xl left-[35%] text-red-600 font-bold'>Item4</h1>
                    <button onClick={() => setItems(items.filter(item => item !== 4))} className='text-red-600  border-red-600 px-4 py-2 rounded-md border-2 absolute right-4'>20000G</button>
                </div> : null} </>}
                
                {props.children}
            </div>
        </div>
    </>
  ) : "";
}

export default PopUp