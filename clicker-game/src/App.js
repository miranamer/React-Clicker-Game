import {useState, useEffect} from 'react'
import Background from './components/Background'
import Home from './pages/Home'
import HOF from './pages/HOF'
import {Route, Routes} from 'react-router-dom'

function App() {

  //TODO: Add name to HOF page, view leaderboard page.

  const [gold, setGold] = useState(0);
  const [goldRate, setGoldRate] = useState(10);
  const [lvl, setLvl] = useState(1);
  const [shopA, setShopA] = useState(false);
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
      
      <Routes>
        <Route path='/' element={<Home gold={gold} setGold={setGold} nuggetProb={nuggetProb} setNuggetProb={setNuggetProb} nuggetMultiplier={nuggetMultiplier} setNuggetMultiplier={setNuggetMultiplier} lvl={lvl} setLvl={setLvl} upgradeA={upgradeA} setUpgradeA={setUpgradeA} setShopA={setShopA} shopA={shopA} goldRate={goldRate} setGoldRate={setGoldRate} />} />
        <Route path='/add_your_name' element={<HOF />} />
      </Routes>
    </>
  );
}

export default App;
