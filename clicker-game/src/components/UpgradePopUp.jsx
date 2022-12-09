import React from 'react'

const UpgradePopUp = (props) => {
  return (props.trigger) ?  (
    <>
        <div className="fixed top-0 left-0 w-full h-screen bg-black/60 flex justify-center items-center">
            <div className="relative p-5 w-[900px] h-[600px] bg-white">
                <h1 className='text-2xl font-bold text-center'>Upgrade</h1>
                <p onClick={() => props.setUpgradeA(false)} className='absolute top-4 right-5 text-3xl hover:cursor-pointer'>X</p>
                {props.children}
            </div>
        </div>
    </>
  ) : "";
}

export default UpgradePopUp