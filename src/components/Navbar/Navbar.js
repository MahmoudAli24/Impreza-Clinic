import React, { memo } from "react";
import Container from "../../UI/Container";
import NavbarLogo from "./NavbarLogo";
import NavbarLink from "./NavbarLink";
import { useMediaQuery } from "react-responsive";
import Sidenav from "./Sidenav";
import classes from "./Navbar.module.css";

function Navbar() {
  const isMobile = useMediaQuery({ query: `(max-width: 991px)` });
  return (
    <Container>
      <div className={classes.navbar}>
        <NavbarLogo />
        {isMobile ? <Sidenav /> : <NavbarLink />}
      </div>
    </Container>
  );
}

export default memo(Navbar);
