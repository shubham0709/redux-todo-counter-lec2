import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <Link to="/">Counter APP</Link>
      <Link to="/todos">Todo App</Link>
    </div>
  );
};

export default Navbar;
