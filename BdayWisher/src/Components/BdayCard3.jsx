import React from "react";

const BdayCard3 = ({ name }) => {
  return (
    <div className="bg-sky-300 w-1/3 max-h-72">
      <div className="bg-slate-50 h-3/4 p-5 m-8">
        {" "}
        <div className="text-center m-5 font-mono font-semibold text-xl">
          Happy Birthday, {name}!!
        </div>
        <div className="text-center font-mono">
          Another year, and you're just getting sweeter:)<br></br>
          You are a blessing to everyone who knows you.
        </div>
      </div>
    </div>
  );
};

export default BdayCard3;
