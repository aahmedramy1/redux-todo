import React from "react";
import "./FilterButtons.css";

const FilterButtons = () => {
  return (
    <div>
      <button type="button" class="btn btn-warning">
        Done
      </button>
      <button type="button" class="btn btn-primary">
        Show All
      </button>
      <button type="button" class="btn btn-warning">
        Not Done
      </button>
    </div>
  );
};

export default FilterButtons;
