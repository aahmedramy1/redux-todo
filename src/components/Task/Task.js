import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import "./Task.css";
import { useDispatch, useSelector } from "react-redux";
import { setCheck, setEdit, setDescription } from "../../features/todoSlice";

const TodoItem = ({ id }) => {
  const dispatch = useDispatch();
  const item = useSelector((state) =>
    state.todos.todoList.find((element) => {
      return element.id === id;
    })
  );

  const [editedValue, setEditedValue] = useState(item.description);

  const handleCheck = () => {
    dispatch(setCheck(id));
  };

  return (
    <div className="todoItem">
      <Checkbox
        checked={item.isDone}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      {item.enableEdit ? (
        <input
          type="text"
          value={editedValue}
          onChange={(e) => setEditedValue(e.target.value)}
        />
      ) : (
        <p className={item.isDone && "todoItem--done"}>{item.description}</p>
      )}
      {item.enableEdit ? (
        <button
          type="button"
          onClick={() => {
            dispatch(setEdit(id));
            dispatch(setDescription({ id: id, newDescription: editedValue }));
          }}
          className="btn btn-link"
        >
          Done
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            dispatch(setEdit(id));
          }}
          className="btn btn-link"
        >
          edit
        </button>
      )}
    </div>
  );
};

export default TodoItem;
