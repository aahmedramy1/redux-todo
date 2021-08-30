import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "../Task/Task";
import { selectTodoList, selectfilterOption } from "../../features/todoSlice";
import "./ListTask.css";

const ListTask = () => {
  const todoList = useSelector(selectTodoList);
  const filter = useSelector(selectfilterOption);
  console.log(filter);
  return (
    <div className="app__todoContainer">
      {todoList
        .filter((element) => {
          if (filter === "all") {
            return element;
          } else if (filter === "done") {
            return element.isDone;
          } else if (filter === "not") {
            return !element.isDone;
          } else {
            return element;
          }
        })
        .map((item) => {
          return (
            <TodoItem name={item.description} done={item.isDone} id={item.id} />
          );
        })}
    </div>
  );
};

export default ListTask;
