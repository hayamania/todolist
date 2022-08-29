import "./App.css";
import React, { useState, useRef } from "react";
import { ImBin } from "react-icons/im";

function App() {
  const [toDolists, setToDolists] = useState([
    "Go to supermarket",
    "make my portfolio",
    "finish to do list app",
  ]);
  const [toDoinput, setToDoinput] = useState("");
  const inputRef = useRef(false);

  function addToDo(event) {
    setToDolists((current) => [...current, toDoinput]);
    inputRef.current.value = "";
    inputRef.current.focus();
    console.log(`Add ${toDoinput} to the list`);
    console.log(toDolists);
  }

  function updateInput(event) {
    setToDoinput(event.target.value);
  }

  function updateComplete(event) {
    console.log(`Update complete`);
  }
  return (
    <div className="App">
      <div className="input">
        <input
          type={"text"}
          placeholder="Add things to do..."
          className="inputToDo"
          onChange={updateInput}
          ref={inputRef}
        />
        <button type={"submit"} className="inputBtn" onClick={addToDo}>
          Add
        </button>
      </div>
      <div className="display">
        {toDolists.map((list, index) => (
          <div className="displayTodo" key={index} onClick={updateComplete}>
            <h3>{list}</h3>
            <button className="delete-btn">
              <ImBin />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
