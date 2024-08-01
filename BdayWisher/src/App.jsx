import { useState } from "react";

import "./App.css";
import BdayCard from "./Components/BdayCard";
import BdayCard2 from "./Components/BdayCard2";
import BdayCard3 from "./Components/BdayCard3";

function App() {
  const [name, setName] = useState("");
  const [showWishCard, setShowWishCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || name === "") {
      alert("invalid name");
      return;
    }
    console.log(name);

    setShowWishCard(true);
  };
  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <>
      {!showWishCard ? (
        <div className="w-full h-screen bg-[url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center flex justify-center items-center">
          <div className="w-1/2 h-1/3 bg-blue-700 bg-opacity-40 rounded-lg text-white font-mono shadow-2xl flex flex-col items-center gap-8">
            <div className="text-3xl font-semibold mt-3">Enter Your Name</div>
            <form
              className=" w-1/2 h-1/3 flex gap-2 flex-col items-center"
              onSubmit={handleSubmit}
            >
              <input
                className="w-full p-1 rounded text-black"
                placeholder="Enter Your Name"
                type="text"
                value={name}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="bg-blue-600 w-1/4 py-1 px-4 mt-4 rounded-lg font-semibold"
              >
                Done
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex justify-between">
          <BdayCard name={name} />
          <BdayCard2 name={name} />
          <BdayCard3 name={name} />
        </div>
      )}
    </>
  );
}

export default App;
