import React, { useState } from 'react'

const HOF = () => {

    const [name, setName] = useState('');
    
    const handleSubmit = () => {
        console.log(name);
    }

  return (
    <>
        <div className="bg-gray-700 w-full h-screen">
            <h1 className=' text-center py-10 text-3xl text-white'>Add Your Name</h1>
            <div className="flex justify-center items-center">
                <form onSubmit={() => handleSubmit()}>
                    <input onChange={(e) => setName(e.target.value)} type="text" name='name' placeholder='Enter Your Name' className=' text-white text-center py-3 px-10 rounded-md border-[3px] border-gray-900 bg-black' />
                    <button className='bg-green-400 px-5 py-3 rounded-md ml-2 font-bold text-green-700 border-2 border-green-700'>Submit</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default HOF