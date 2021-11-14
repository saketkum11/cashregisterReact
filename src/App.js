import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [billAmount, setBillAmount] = useState(0);
  var [cashPaid, setCashPaid] = useState(0);
  var [display, setDisplay] = useState("");
  var currency = [2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
  function inputChangeHandler(e) {
    setBillAmount(e.target.value);
  }
  function secondInputHandler(e) {
    setCashPaid(e.target.value);
  }
  function message(msg) {
    setDisplay();
  }
  function calculate() {
    if (cashPaid != "" || billAmount != "") {
      if (cashPaid > 0 && billAmount > 0) {
        var diffrences = cashPaid - billAmount;
        setDisplay(diffrences);
      } else {
        setDisplay("Enter value positive");
      }
    } else {
    }
  }
  return (
    <div className="App">
      <h1>Cash Manager</h1>
      <label style={{ display: "block" }}>Bill Amount </label>
      <input
        style={{
          textAlign: "center",
          padding: "0.5rem",
          borderRadius: "0.5rem",
          border: "white"
        }}
        type="number"
        onChange={inputChangeHandler}
      ></input>

      <label style={{ display: "block", margin: "1rem" }}>Cash paid </label>
      <input
        style={{
          textAlign: "center",
          padding: "0.5rem",
          borderRadius: "0.5rem",
          border: "white"
        }}
        type="number"
        onChange={secondInputHandler}
      ></input>
      <button style={{}} onClick={calculate}>
        Check
      </button>

      <h1>{display}</h1>
    </div>
  );
}
