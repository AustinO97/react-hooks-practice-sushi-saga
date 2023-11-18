import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ newFour, onGetSushi, onEatSushi }) {
  const newSushis = newFour.filter((sushi) => !sushi.eaten).map(sushi => {
    return <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} />
  })

  return (
    <div className="belt">
      {newSushis}
      <MoreButton onGetSushi={onGetSushi} />
    </div>
  );
}

export default SushiContainer;
