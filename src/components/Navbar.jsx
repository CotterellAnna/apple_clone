import React from "react";
import NavItem from "./NavItem"

const navStyle = {
    backgroundColor: "rgba(10, 10, 10, 100)",
    height: "7vh", 
}
function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg" style={navStyle}>
            <div className="container-fluid justify-content-center">
                <a className="navbar-brand m-0 px-2 py-0 flex-grow-0" href="#">
                    <img src="/images/apple_logo.svg" className="img-fluid" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                {/* nav items start */}
                <div className="collapse navbar-collapse justify-content-center flex-grow-0" id="navItems">
                    <ul className="navbar-nav w-auto mb-2 mb-lg-0">
                        <NavItem text="Store" />
                        <NavItem text="Mac" />
                        <NavItem text="iPhone" />
                        <NavItem text="Watch" />
                        <NavItem text="Vision" />
                        <NavItem text="Airpods" />
                        <NavItem text="TV & Home" />
                        <NavItem text="Entertainment" />
                        <NavItem text="Accessories" />
                        <NavItem text="Supoort" />
                        <NavItem text={<i class="bi bi-search"></i>} />
                        <NavItem text={<i class="bi bi-bag"></i>} />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;