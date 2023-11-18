import React from "react";

function Table({ newFour, budget }) {
  // renders an empty plate for every element in the array
  const emptyPlates = newFour.filter(sushi => sushi.eaten).map((sushi, index) => 
    <div key={sushi.id} className="empty-plate" style={{ top: -7 * index }} />
  );

  return (
    <>
      <h1 className="remaining">
        You have: ${budget} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
