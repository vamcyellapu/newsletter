import React from "react";

function List({ children }) {
  return (
    <li className="flex items-start gap-5">
      <img src={process.env.PUBLIC_URL + "/images/icon-list.svg"} alt="" />
      {children}
    </li>
  );
}

export default List;
