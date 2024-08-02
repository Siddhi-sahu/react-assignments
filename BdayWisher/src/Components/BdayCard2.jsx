import React from "react";

const BdayCard2 = ({ name }) => {
  return (
    <div className="w-1/3   bg-slate-700 text-white rounded  border-4 border-slate-300">
      <div className=" m-10 h-3/4 bg-[url('https://images.unsplash.com/photo-1722338366671-29a40959fad3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] font-mono p-8 rounded ">
        <div className="text-center">
          Congratulations on another lap around the sun.
        </div>
        <div className="font-semibold text-3xl m-7 text-center">
          Happy Birthday to you, {name} {" <3"}
        </div>
        <div className="text-center">
          You have travelled 940,000,000km through space and time in the last
          year.
        </div>
      </div>
    </div>
  );
};

export default BdayCard2;
