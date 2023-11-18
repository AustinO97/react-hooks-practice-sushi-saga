import React from "react";

function Sushi({ sushi, onEatSushi }) {
  const { id, name, img_url, price, eaten } = sushi

  return (
    <div className="sushi">
      <div className="plate" onClick={onEatSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            id={id}
            src={img_url}
            alt={name}
            width="100%"
            data-price={price}
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
