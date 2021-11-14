import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [billAmount, setBillAmount] = useState(0);
  var [cashPaid, setCashPaid] = useState(0);
  var [display, setDisplay] = useState("");
  var currency = [2000, 500, 100, 50, 20, 10, 5, 1];
  function inputChangeHandler(e) {
    setBillAmount(e.target.value);
  }
  function secondInputHandler(e) {
    setCashPaid(e.target.value);
  }
  function numberOfNotes(change) {
    for (var i = 0; i < currency.length; i++) {
      console.log(currency[i]);
      var noOfNotes = Math.trunc(change / currency[i]);
      var reminder = change % currency[i];
      console.log(noOfNotes);
      console.log(reminder);
    }
  }

  function calculate() {
    if (cashPaid != "" || billAmount != "") {
      if (cashPaid > 0 && billAmount > 0) {
        var diffrences = cashPaid - billAmount;
        var notes = numberOfNotes(diffrences);
        setDisplay(diffrences);
      } else {
        setDisplay("Enter value positive");
      }
    } else {
      setDisplay("Please enter some value");
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
      <div>
        <table>
          <tr
            style={{
              backgroundColor: "black"
            }}
          >
            <th>Notes</th>
            <td>2000</td>
            <td>500</td>
            <td>100</td>
            <td>50</td>
            <td>20</td>
            <td>10</td>
            <td>5</td>
            <td>1</td>
          </tr>
          <tr
            style={{
              backgroundColor: "black"
            }}
          >
            <th>no of notes</th>
            <td>2000</td>
            <td>500</td>
            <td>100</td>
            <td>50</td>
            <td>20</td>
            <td>10</td>
            <td>5</td>
            <td>1</td>
          </tr>
        </table>
      </div>

      <h1>{display}</h1>
    </div>
  );
}
