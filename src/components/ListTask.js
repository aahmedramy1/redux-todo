import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./Task";
import { selectTodoList } from "../features/todoSlice";
import "./ListTask.css";

const ListTask = () => {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="app__todoContainer">
      {todoList.map((item) => {
        return <TodoItem name={item.item} done={item.done} id={item.id} />;
      })}
    </div>
  );
};

export default ListTask;
