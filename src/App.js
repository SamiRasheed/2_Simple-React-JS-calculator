import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");

  const handeClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };
  const calculate = () => {
    try {
      // eslint-disable-next-line
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Syntax Error");
    }
  };
  return (
    <>
      <h1 className="heading">Simple React JS Calculator</h1>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>
        <div className="keypad">
          <button className="highlight" onClick={clear} id="clear">
            Clear
          </button>
          <button className="highlight" onClick={backspace} id="backspace">
            C
          </button>
          <button className="highlight" name="/" onClick={handeClick}>
            &divide;
          </button>
          <button name="7" onClick={handeClick}>
            7
          </button>
          <button name="8" onClick={handeClick}>
            8
          </button>
          <button name="9" onClick={handeClick}>
            9
          </button>
          <button className="highlight" name="*" onClick={handeClick}>
            &times;
          </button>
          <button name="4" onClick={handeClick}>
            4
          </button>
          <button name="5" onClick={handeClick}>
            5
          </button>
          <button name="6" onClick={handeClick}>
            6
          </button>
          <button className="highlight" name="-" onClick={handeClick}>
            &ndash;
          </button>
          <button name="1" onClick={handeClick}>
            1
          </button>
          <button name="2" onClick={handeClick}>
            2
          </button>
          <button name="3" onClick={handeClick}>
            3
          </button>
          <button className="highlight" name="+" onClick={handeClick}>
            +
          </button>
          <button name="0" onClick={handeClick}>
            0
          </button>
          <button name="." onClick={handeClick}>
            .
          </button>
          <button className="highlight" onClick={calculate} id="result">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
