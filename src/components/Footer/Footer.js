import NavbarLink from "../Navbar/NavbarLink";
import NavbarLogo from "../Navbar/NavbarLogo";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa6";
import classes from "./Footer.module.css";
import Container from "../../UI/Container";
import { Link } from "react-router-dom";
import { memo } from "react";

function Footer() {
  return (
    <footer>
      <Container>
        <div className={classes.footer}>
          <NavbarLogo />
          <NavbarLink />
          <div>
            <Link>
              <FaInstagram />
            </Link>
            <Link>
              <FaYoutube />
            </Link>
            <Link>
              <FaFacebook />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default memo(Footer);
