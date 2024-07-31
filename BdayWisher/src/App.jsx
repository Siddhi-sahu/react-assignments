import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div className="w-full h-screen bg-[url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center flex justify-center items-center">
      <div className="w-1/2 h-1/3 bg-blue-700 bg-opacity-40 rounded-lg text-white font-mono shadow-2xl flex flex-col items-center gap-8">
        <div className="text-3xl font-semibold mt-3">Enter Your Name</div>
        <input
          className="w-10/12 p-1 rounded"
          placeholder="Enter Your Name"
          type="text"
        />
        <button className="bg-blue-600 py-2 px-6 rounded-lg font-semibold">
          Done
        </button>
      </div>
    </div>
  );
}

export default App;
