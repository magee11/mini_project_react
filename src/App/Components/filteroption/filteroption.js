import React from "react";
import "./filteroption.scss";

function FilterOption(props) {
  const { clicked } = props

  return clicked ? (
    <ol className="filter-optn">
      <li className="filter-optn_lists">Risk</li>
      <li className="filter-optn_lists">Ongoing</li>
      <li className="filter-optn_lists">Completed</li>
      <li className="filter-optn_lists">Onprogress</li>
      <li className="filter-optn_lists">Yet To Start</li>
    </ol>
  ) : (
    ""
  );
}

export default FilterOption;
