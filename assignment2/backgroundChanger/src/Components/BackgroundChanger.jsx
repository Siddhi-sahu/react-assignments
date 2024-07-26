import React from "react";
import "./BackgroundChanger.css";

function BackgroundChanger() {
  function handleRed() {
    document.body.style.background = "red";
  }
  function handleYellow() {
    document.body.style.background = "yellow";
  }
  function handleBlack() {
    document.body.style.background = "Black";
  }
  function handlePurple() {
    document.body.style.background = "purple";
  }
  function handleGreen() {
    document.body.style.background = "green";
  }
  function handleBlue() {
    document.body.style.background = "blue";
  }
  function handleDefault() {
    document.body.style.background = "white";
  }
  return (
    <>
      <div className="backgroundChangerBar">
        <button id="red" onClick={handleRed}>
          Red
        </button>
        <button id="yellow" onClick={handleYellow}>
          Yellow
        </button>
        <button id="black" onClick={handleBlack}>
          Black
        </button>
        <button id="purple" onClick={handlePurple}>
          Purple
        </button>
        <button id="green" onClick={handleGreen}>
          Green
        </button>
        <button id="blue" onClick={handleBlue}>
          Blue
        </button>
        <button id="default" onClick={handleDefault}>
          Default
        </button>
      </div>
    </>
  );
}

export default BackgroundChanger;
