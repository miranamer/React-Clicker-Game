import React from 'react'
import { useState } from 'react';

const PopUp = (props) => {

    const [items, setItems] = useState([1, 2, 3, 4]);

    const item1_levels = [0.1, 0.2, 0.3, 0.4, 0.5, 0.5];
    const item2_levels = [12, 13, 14, 17, 20, 25, 34, 50, 50];
    const item3_levels = [0.40, 0.45, 0.50, 0.69, 0.75, 0.75]

    const item1_prices = [100, 150, 200, 350, 500, "MAX"];
    const item2_prices = [200, 300, 450, 575, 650, 700, 800, 1500, "MAX"];
    const item3_prices = [300, 350, 500, 700, 850, "MAX"];

    const [item1Ptr, setItem1Ptr] = useState(0);
    const [item2Ptr, setItem2Ptr] = useState(0);
    const [item3Ptr, setItem3Ptr] = useState(0);

    const [item1PricePtr, setItem1PricePtr] = useState(0);
    const [item2PricePtr, setItem2PricePtr] = useState(0);
    const [item3PricePtr, setItem3PricePtr] = useState(0);

    const handleOne = () => { // do this for other items
        
        if(item1_prices[item1PricePtr] === "MAX"){
            alert('Already Max Level!');
        }
        else{
                if(props.gold >= item1_prices[item1PricePtr]){
                    props.setGold(props.gold - item1_prices[item1PricePtr]);
                    const newRate = (item1_levels[item1Ptr] * props.goldRate) + props.goldRate // increases gold rate by 10%
                    props.setGoldRate(parseInt(newRate))
                    setItem1Ptr(item1Ptr + 1);
                    setItem1PricePtr(item1PricePtr + 1)
                }
                else{
                    alert(`Need ${item1_prices[item1PricePtr]} Gold!`)
                }
            }
        }

    const handleTwo = () => {
        if(item2_prices[item2PricePtr] === "MAX"){
            alert('Already Max Level!');
        }
        else{
                if(props.gold >= item2_prices[item2PricePtr]){
                    props.setGold(props.gold - item2_prices[item2PricePtr]);
                    props.setNuggetProb(props.nuggetProb - 1)
                    setItem2Ptr(item2Ptr + 1);
                    setItem2PricePtr(item2PricePtr + 1)
                }
                else{
                    alert(`Need ${item2_prices[item2PricePtr]} Gold!`)
                }
            }

    }

    const handleThree = () => {
        if(item3_prices[item3PricePtr] === "MAX"){
            alert('Already Max Level!');
        }
        else{
                if(props.gold >= item3_prices[item3PricePtr]){
                    props.setGold(props.gold - item3_prices[item3PricePtr]);
                    props.setNuggetMultiplier(item3_levels[item3Ptr])
                    setItem3Ptr(item3Ptr + 1);
                    setItem3PricePtr(item3PricePtr + 1)
                }
                else{
                    alert(`Need ${item3_prices[item3PricePtr]} Gold!`)
                }
            }

    }




  return (props.trigger) ?  (
    <>
        <div className="fixed top-0 left-0 w-full h-screen bg-black/60 flex justify-center items-center">
            <div className="relative p-5 w-[900px] h-[600px] bg-white">
                <h1 className='text-2xl font-bold text-center'>Shop</h1>
                <p onClick={() => props.setShop(false)} className='absolute top-2 right-5 text-3xl hover:cursor-pointer'>X</p>
                
                {items.length === 0 ? <h1 className=' text-2xl text-center mt-20'>Shop Is Empty!</h1> : <>{items.includes(1) ? <div className="drop-shadow-lg relative w-full h-[75px] bg-sky-300 mt-20 flex items-center">
                    <button className='text-sky-600  border-sky-600 px-3 py-2 rounded-md absolute left-4'>Common</button>
                    <h1 className='absolute text-2xl left-[33%] text-sky-600 font-bold'>{item1_levels[item1Ptr] * 100}% Increased Gold Rate</h1>
                    <button onClick={() => handleOne()} className='text-sky-600  border-sky-600 px-4 py-2 rounded-md border-2 absolute right-4'>{item1_prices[item1PricePtr] === 'MAX' ? 'MAX' : item1_prices[item1PricePtr]}</button>
                </div> : null}
                
                {items.includes(2) ?  <div className=" drop-shadow-lg relative w-full h-[75px] bg-yellow-300 mt-10 flex items-center">
                    <button className='text-yellow-600  border-yellow-600 px-7 py-2 rounded-md absolute left-4'>Rare</button>
                    <h1 className='absolute text-2xl left-[35%] text-yellow-600 font-bold'>{item2_levels[item2Ptr]}% Nugget Probability</h1>
                    <button onClick={() => handleTwo()} className='text-yellow-600  border-yellow-600 px-4 py-2 rounded-md border-2 absolute right-4'>{item2_prices[item2PricePtr] === 'MAX' ? 'MAX' : item2_prices[item2PricePtr]}</button>
                </div> : null}
                
                {items.includes(3) ? <div className="drop-shadow-lg relative w-full h-[75px] bg-purple-300 mt-10 flex items-center">
                    <button className='text-purple-600  border-purple-600 px-7 py-2 rounded-md absolute left-4'>Splendid</button>
                    <h1 className='absolute text-2xl left-[40%] text-purple-600 font-bold'>{item3_levels[item3Ptr] * 100}% Nugget Size</h1>
                    <button onClick={() => handleThree()} className='text-purple-600  border-purple-600 px-4 py-2 rounded-md border-2 absolute right-4'>{item3_prices[item3PricePtr] === 'MAX' ? 'MAX' : item3_prices[item3PricePtr]}</button>
                </div> : null}
                
                {items.includes(4) ? <div className="drop-shadow-lg relative w-full h-[75px] bg-red-300 mt-10 flex items-center">
                    <button className='text-red-600  border-red-600 px-7 py-2 rounded-md absolute left-4'>Ultra-Rare</button>
                    <h1 className='absolute text-2xl left-[25%] text-red-600 font-bold'>Add Your Name To The Hall Of Fame</h1>
                    <button onClick={() => setItems(items.filter(item => item !== 4))} className='text-red-600  border-red-600 px-4 py-2 rounded-md border-2 absolute right-4'>1,000,000</button>
                </div> : null} </>}
                
                {props.children}
            </div>
        </div>
    </>
  ) : "";
}

export default PopUp