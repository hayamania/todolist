import "./App.css";
import React, { useState, useRef } from "react";
import { ImBin } from "react-icons/im";

function App() {
  const [toDolists, setToDolists] = useState([
    { task: "Go to supermarket", complete: false },
    { task: "make my portfolio", complete: false },
    { task: "finish to do list app", complete: false },
  ]);
  const [toDoinput, setToDoinput] = useState("");
  const [complete, setComplete] = useState(false);
  const inputRef = useRef();

  function addToDo(event) {
    setToDolists((current) => [
      ...current,
      { task: toDoinput, complete: false },
    ]);
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
            <h3>{list.task}</h3>
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
