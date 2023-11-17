import React, { useState, useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer() {
  const [sushi, setSushi] = useState([])
  const [visibleSushi, setVisableSushi] = useState(4)

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
    .then(res => res.json())
    .then(data => setSushi(data))
  }, )

  const handleShowSushi = () => {
    setVisableSushi((lastSushi) => lastSushi + 4)
  }


  const sushiArr = sushi.slice(0, visibleSushi).map((sushiObj) => {
    return <Sushi key={sushiObj.id} sushi={sushiObj}  />
  })

  return (
    <div className="belt">
      {sushiArr}
      <MoreButton onShowSushi={handleShowSushi} />
    </div>
  );
}

export default SushiContainer;
