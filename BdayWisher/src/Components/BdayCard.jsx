import React from "react";

const BdayCard = ({ name }) => {
  return (
    <div className="w-1/3 min-h-48 bg-pink-200 rounded">
      happy birthday {name}
    </div>
  );
};

export default BdayCard;
