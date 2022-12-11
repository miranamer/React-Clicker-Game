import React from 'react'
import {useState} from 'react'
import pick from '../assets/pick.png'
import upgrade from '../assets/upgrade.png'
import shop from '../assets/ShopIcon.png'
import MineCard from '../components/MineCard';
import ShopCard from '../components/ShopCard';
import UpgradeCard from '../components/UpgradeCard';
import PopUp from '../components/PopUp';
import UpgradePopUp from '../components/UpgradePopUp';


const Home = ({gold, setGold, nuggetProb, setNuggetProb, nuggetMultiplier, setNuggetMultiplier, lvl, setLvl, upgradeA, setUpgradeA, setShopA, shopA, goldRate, setGoldRate}) => {
  return (
    <>
      <div className="bg-gray-700 w-full h-screen">
        <div className="flex items-center py-3 z-100">
          <h1 className=" ml-[48%] text-yellow-500 text-2xl font-bold">Gold: {gold}</h1>
          <h1 className=" ml-[24%] text-purple-500 text-2xl font-bold">Level: {lvl}</h1>
        </div>
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="flex justify-evenly w-full">
            <ShopCard setShop={setShopA} img={shop} text={`Shop`} />
            <MineCard nugget_multiplier={nuggetMultiplier} nugget_prob={nuggetProb} goldRate={goldRate} gold={gold} setGold={setGold} img={pick} text={`${goldRate} Gold per second`} />
            <UpgradeCard setUpgradeA={setUpgradeA} img={upgrade} text={`Upgrade`} />
          </div>
          <PopUp nuggetMultiplier={nuggetMultiplier} setNuggetMultiplier={setNuggetMultiplier} nuggetProb={nuggetProb} setNuggetProb={setNuggetProb} setGold={setGold} gold={gold} goldRate={goldRate} setGoldRate={setGoldRate} setShop={setShopA} trigger={shopA} />
          <UpgradePopUp setUpgradeA={setUpgradeA} trigger={upgradeA} />
        </div>
      </div>
    </>
  )
}

export default Home