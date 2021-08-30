import React from "react";
import "./App.css";
import Input from "./components/AddTask/AddTask";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import ListTask from "./components/ListTask/ListTask";

function App() {
  return (
    <div className="app">
      <FilterButtons />
      <div className="app__container">
        <ListTask />
        <Input />
      </div>
    </div>
  );
}

export default App;
