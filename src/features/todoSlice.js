import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  filterOption: "all",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    setCheck: (state, action) => {
      state.todoList.forEach((item) => {
        if (action.payload === item.id) {
          if (item.isDone === true) {
            item.isDone = false;
          } else {
            item.isDone = true;
          }
        }
      });
    },
    setFilter: (state, action) => {
      state.filterOption = action.payload;
    },
    setEdit: (state, action) => {
      state.todoList.forEach((item) => {
        if (action.payload === item.id) {
          if (item.enableEdit === true) {
            item.enableEdit = false;
          } else {
            item.enableEdit = true;
          }
        }
      });
    },
    setDescription: (state, action) => {
      state.todoList.forEach((item) => {
        if (action.payload.id === item.id) {
          item.description = action.payload.newDescription;
        }
      });
    },
  },
});

export const { saveTodo, setCheck, setFilter, setEdit, setDescription } =
  todoSlice.actions;

export const selectTodoList = (state) => state.todos.todoList;
export const selectfilterOption = (state) => state.todos.filterOption;

export default todoSlice.reducer;
