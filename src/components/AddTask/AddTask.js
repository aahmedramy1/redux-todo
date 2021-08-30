import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../../features/todoSlice";
import "./AddTask.css";

const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodo = () => {
    console.log(`Adding ${input}`);
    dispatch(
      saveTodo({
        description: input,
        isDone: false,
        id: Date.now(),
      })
    );
    setInput("");
  };

  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add!</button>
    </div>
  );
};

export default Input;
