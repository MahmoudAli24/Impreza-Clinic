import React, { memo } from "react";
import { Link } from "react-router-dom";
import { FaStarOfLife } from "react-icons/fa6";
import classes from "./NavbarLogo.module.css";

function NavbarLogo() {
  return (
    <div className={classes["navbar-logo"]}>
      <Link>
        <span>
          <span>
            <FaStarOfLife />
          </span>
          <span>Impreza Clinic</span>
        </span>
      </Link>
    </div>
  );
}

export default memo(NavbarLogo);
