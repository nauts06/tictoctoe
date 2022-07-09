import React from "react";
import { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [newtext, setnewText] = useState([]);
  const handleChange = () => {
    setnewText([...newtext, text]);
    setText("");
  };

  const handleClear = (index) => {
    const data = newtext.filter((i) => i != index);
    setnewText(data);
  };
  return (
    <div>
      <input
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
        placeholder="Enter Something"
        type="text"
      />
      <button onClick={handleChange}>Add</button>
      {newtext.map((elem, index) => (
        <div className="flex" key={elem} id={elem}>
          <h2>
            {elem} <button onClick={() => handleClear(index)}>Clear</button>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Todo;
