import React from "react";
import "./App.css";
import Input from "./components/AddTask";
import ListTask from "./components/ListTask";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <ListTask />
        <Input />
      </div>
    </div>
  );
}

export default App;
