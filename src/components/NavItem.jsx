import React from "react";

function NavItem(props){
    return(
        <li className="nav-item mx-2">
          <a className="nav-link text-light fw-light" href="#">{props.text}</a>
        </li>
    )
}

export default NavItem;