import "./App.css";
import React, { useState, useRef } from "react";
import { ImBin } from "react-icons/im";

function App() {
  const [toDolists, setToDolists] = useState([]);
  const [toDoinput, setToDoinput] = useState("");
  const inputRef = useRef();

  function addToDo(event) {
    if (toDoinput.length > 0) {
      setToDolists((current) => [
        ...current,
        { task: toDoinput, complete: false },
      ]);
    }
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  function updateInput(event) {
    setToDoinput(event.target.value);
  }

  function deleteTask(event, index) {
    setToDolists(toDolists.filter((list, i) => i !== index));
    console.log(`delete task ${index}`);
  }

  function updateComplete(event, index) {
    const array = [];
    toDolists.map((list, i) => {
      if (i === index) {
        array.push({ task: list.task, complete: !list.complete });
      } else {
        array.push(list);
      }
    });
    setToDolists(array);
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
          <div className="displayTodo" key={index}>
            <h3
              style={{
                textDecoration: list.complete ? "line-through" : "none",
              }}
              onClick={(e) => updateComplete(e, index)}
            >
              {list.task}
            </h3>
            <button
              className="delete-btn"
              onClick={(e) => deleteTask(e, index)}
            >
              <ImBin />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
