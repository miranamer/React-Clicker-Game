import {useState} from 'react'
import pick from './assets/pick.png'
import upgrade from './assets/upgrade.png'
import shop from './assets/ShopIcon.png'
import MineCard from './components/MineCard';
import ShopCard from './components/ShopCard';
import UpgradeCard from './components/UpgradeCard';
import { useEffect } from 'react';
import PopUp from './components/PopUp';
import UpgradePopUp from './components/UpgradePopUp';

function App() {

  //TODO: Add name to HOF page, view leaderboard page.

  const [gold, setGold] = useState(0);
  const [goldRate, setGoldRate] = useState(10);
  const [lvl, setLvl] = useState(1);
  const [shop, setShop] = useState(false);
  const [upgradeA, setUpgradeA] = useState(false);
  const [nuggetProb, setNuggetProb] = useState(10); // lower this to increase prob of nugget
  const [nuggetMultiplier, setNuggetMultiplier] = useState(0.35);
  //const [durability, setDurability] = useState(10);

  const levels = [100, 1000, 10000, 100000, 1000000, "MAX"];
  const [lvlPtr, setLvlPtr] = useState(0);

  useEffect(() => {
    if(lvlPtr === levels.length - 1){
        return;
    }
    else{
      if(gold >= levels[lvlPtr]){
        setLvl(lvl + 1);
        alert(`Level Up! - ${lvl + 1}`)
        if (lvl == 5){
          setLvl("MAX");
        }
        else{
          setLvl(lvl + 1);
        }
        setLvlPtr(lvlPtr + 1);
      }
    }
  }, [gold])


  return (
    <>
      <div className="bg-gray-700 w-full h-screen">
        <div className="flex items-center py-3">
          <h1 className=" ml-[48%] text-yellow-500 text-2xl font-bold">Gold: {gold}</h1>
          <h1 className=" ml-[24%] text-purple-500 text-2xl font-bold">Level: {lvl}</h1>
        </div>
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="flex justify-evenly w-full">
            <ShopCard setShop={setShop} img={shop} text={`Shop`} />
            <MineCard nugget_multiplier={nuggetMultiplier} nugget_prob={nuggetProb} goldRate={goldRate} gold={gold} setGold={setGold} img={pick} text={`${goldRate} Gold per second`} />
            <UpgradeCard setUpgradeA={setUpgradeA} img={upgrade} text={`Upgrade`} />
          </div>
          <PopUp nuggetMultiplier={nuggetMultiplier} setNuggetMultiplier={setNuggetMultiplier} nuggetProb={nuggetProb} setNuggetProb={setNuggetProb} setGold={setGold} gold={gold} goldRate={goldRate} setGoldRate={setGoldRate} setShop={setShop} trigger={shop} />
          <UpgradePopUp setUpgradeA={setUpgradeA} trigger={upgradeA} />
        </div>
      </div>
    </>
  );
}

export default App;
