import "./App.css";
import React, { useState } from "react";
import { ImBin } from "react-icons/im";

function App() {
  const [toDolists, setToDolists] = useState([
    "Go to supermarket",
    "make my portfolio",
    "finish to do list app",
  ]);
  const [toDoinput, setToDoinput] = useState("");
  console.log(toDolists);
  function handleClick(event) {
    setToDolists(toDoinput);
  }

  function updateInput(event) {
    setToDoinput(event.target.value);
    console.log(toDoinput);
  }
  return (
    <div className="App">
      <div className="input">
        <input
          type={"text"}
          placeholder="Add things to do..."
          className="inputToDo"
          onChange={updateInput}
        />
        <button
          type={"submit"}
          className="inputBtn"
          // onClick={() => handleClick}
        >
          Add
        </button>
      </div>
      <div className="display">
        {toDolists.map((list, index) => (
          <div className="displayTodo" key={index}>
            {list}
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
