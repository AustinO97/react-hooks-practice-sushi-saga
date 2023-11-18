import React, { useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])
  const [newFour, setNewFour] = useState([])
  const [budget, setBudget] = useState(100)

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      const allSushis = data.map((sushiObj) => {
        return {...sushiObj, eaten: false}
      })
      const four = allSushis.splice(0, 4)
      setSushi((allSushis))
      setNewFour(four)
    })
  }, [])

  const handleGetSushi = () => {
    const allSushis = sushi
    const four = allSushis.splice(0, 4)
    setSushi((allSushis))
    setNewFour(four)
  }

  const handleEatSushi = (e) => {
    if ((budget - parseInt(e.target.dataset.price) >= 0)) {
      const filteredSushi = newFour.map(sushi => sushi.id == e.target.id ? {...sushi, eaten: true} : sushi)
      setNewFour(filteredSushi)
      const newBudget = budget - parseInt(e.target.dataset.price)
      setBudget(newBudget)
    }
  }

  return (
    <div className="app">
      <SushiContainer newFour={newFour} onEatSushi={handleEatSushi} onGetSushi={handleGetSushi} />
      <Table newFour={newFour} budget={budget} />
    </div>
  );
}

export default App;
