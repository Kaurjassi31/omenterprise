import React from "react";

const DropdownMenu = (props) => {
  return (
    <li className="nav-item dropdown" style={{padding:"0 10px"}}>
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {props.title}
      </a>
      <ul className="dropdown-menu">
        {props.options.map(opt => <li>
          <a className="dropdown-item" href="#">
            {opt}
          </a>
        </li>)}
      </ul>
    </li>
  );
};

export default DropdownMenu;
