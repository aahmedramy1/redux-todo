import React from "react";
import "./FilterButtons.css";
import { useDispatch } from "react-redux";
import { setFilter } from "../../features/todoSlice";

const FilterButtons = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          dispatch(setFilter("done"));
        }}
        className="btn btn-warning"
      >
        Done
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(setFilter("all"));
        }}
        className="btn btn-primary"
      >
        Show All
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(setFilter("not"));
        }}
        className="btn btn-warning"
      >
        Not Done
      </button>
    </div>
  );
};

export default FilterButtons;
