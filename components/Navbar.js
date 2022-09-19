import React from "react";
import navStyles from "../styles/Navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className={navStyles.container}>
      <ul className={navStyles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
