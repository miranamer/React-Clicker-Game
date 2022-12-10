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

  const [gold, setGold] = useState(0);
  const [goldRate, setGoldRate] = useState(10);
  const [lvl, setLvl] = useState(0);
  const [prev, setPrev] = useState(10);
  const [shop, setShop] = useState(false);
  const [upgradeA, setUpgradeA] = useState(false);

  useEffect(() => {
    if(gold === (10 * prev)){
      setLvl(lvl + 1);
      alert(`Level Up! - ${lvl + 1}`)
      setPrev(gold);
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
            <MineCard gold={gold} setGold={setGold} img={pick} text={`${goldRate} Gold per second`} />
            <UpgradeCard setUpgradeA={setUpgradeA} img={upgrade} text={`Upgrade`} />
          </div>
          <PopUp goldRate={goldRate} setGoldRate={setGoldRate} setShop={setShop} trigger={shop} />
          <UpgradePopUp setUpgradeA={setUpgradeA} trigger={upgradeA} />
        </div>
      </div>
    </>
  );
}

export default App;
