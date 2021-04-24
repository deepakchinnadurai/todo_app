import React, { useState } from "react";
import  './AddTask.css';




export function AddTask() {
  const [options, setOptions] = useState([]);

  const [textValue, setTextValue] = useState("");

  const [count, setCount] = useState(0);


  const handleOptionAdd = () => {
    if (textValue.trim().length === 0) return;
    setTextValue("");
    setCount(count+1);
    setOptions([
      ...options,
      { label: textValue, value: textValue.toLowerCase().replace(" ", "-") },
    ]);
  };

  function handleDelete(label) {
    const newList = options.filter((option) => option.label !== label);
 
    setOptions(newList);
    setCount(count-1);
  }


  return (
    <div className="App">
    <p1 class="count">{count}</p1><br/>
      <input
        type="text"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />
      <button class = "btn"  onClick={handleOptionAdd}>Add</button>

      <div>
        {options.map((option) => (
          <div class = "text">
            <label>{option.label}</label>
            <div>
            <button class = "btn" onClick={()=>{handleDelete(option.label)}}>remove</button>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddTask;