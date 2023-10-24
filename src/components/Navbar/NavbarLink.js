import { Link } from "react-router-dom";
import classes from "./NavbarLink.module.css";
import { memo } from "react";

function NavbarLink() {
  return (
    <div>
      <ul className={classes["links-list"]}>
        <li>
          <Link to="/doctors">Doctors</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default memo(NavbarLink);
