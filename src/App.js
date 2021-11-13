import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [output, setOutput] = useState(0);
  var [secondOutput, setSecondOutput] = useState(0);
  function inputChangeHandler(e) {
    setOutput(e.target.value);
  }
  function secondInputHandler(e) {
    setSecondOutput(e.target.value);
  }
  function calculate() {
    var diffrences = secondOutput - output;
    console.log(diffrences);
  }
  return (
    <div className="App">
      <h1>Cash Manager</h1>
      <label style={{ display: "block" }}>Bill Amount </label>
      <input
        style={{ padding: "0.5rem", borderRadius: "0.5rem", border: "white" }}
        type="number"
        onChange={inputChangeHandler}
      ></input>

      <label style={{ display: "block", margin: "1rem" }}>Cash paid </label>
      <input
        style={{
          display: "block",
          padding: "0.5rem",
          borderRadius: "0.5rem",
          border: "white"
        }}
        type="number"
        onChange={secondInputHandler}
      ></input>
      <button onClick={calculate}>Check</button>

      <h1>
        {output}
        {secondOutput}
      </h1>
    </div>
  );
}
