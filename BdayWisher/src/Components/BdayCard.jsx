import React from "react";

const BdayCard = ({ name }) => {
  return (
    // <div>
    <div
      div
      className="w-1/4 h-1/4 min-w-[300px] min-h-[400px] max-h-screen bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1553135422-400ee5852b27?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] rounded flex justify-center border-solid border-4 border-purple-900"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="font-body font-semibold text-purple-500 text-3xl">
          happy birthday
        </div>
        <div className="font-body font-semibold text-purple-500 mt-8 mb-40 text-3xl">
          {" "}
          {name}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default BdayCard;
