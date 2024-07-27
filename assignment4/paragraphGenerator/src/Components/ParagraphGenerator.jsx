import React, { useState, useEffect } from "react";
import "./ParagraphGenerator.css";

function ParagraphGenerator() {
  let [inputPara, setInputPara] = useState("");
  let [inputValue, setInputValue] = useState("");
  let [finalValue, setFinalValue] = useState(0);

  let words = ["i", "siddhi", "chocolates", "like", "is", "lorem", "blah"];

  useEffect(() => {
    let paragraph = "";
    for (let i = 0; i < finalValue; i++) {
      let random = Math.floor(Math.random() * words.length); //0to6

      paragraph += words[random] + " ";
    }
    return setInputPara(paragraph.trim());
  }, [finalValue]);

  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function handleClick() {
    const numberOfWords = parseInt(inputValue, 10);

    if (!isNaN(numberOfWords) && numberOfWords > 0) {
      setFinalValue(numberOfWords);
    } else {
      alert("Please send a Valid number to generate a paragraph.");
    }
  }
  return (
    <>
      <div className="paragraphGenerator">
        <h1 className="heading">Para Generator</h1>
        <div className="inputInterface">
          <input
            id="inputBox"
            type="text"
            value={inputValue}
            placeholder="Enter Number of Words"
            onChange={handleChange}
          />
          <span>
            <button onClick={handleClick}>Generate</button>
          </span>
        </div>
      </div>
      <div className="inputPara">{inputPara}</div>
    </>
  );
}

export default ParagraphGenerator;
