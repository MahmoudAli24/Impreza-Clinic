import { Fragment, memo, useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import classes from "./Sidenav.module.css";
import { FaBars } from "react-icons/fa6";

function Sidenav() {
  const [visible, setVisible] = useState(false);

  const hideSidebar = () => {
    setVisible(false);
  };

  return (
    <Fragment>
      <Sidebar visible={visible} onHide={() => setVisible(false)} fullScreen>
        <ul className={classes["links-list"]}>
          <li>
            <span>
              <Link to="/doctors" onClick={hideSidebar}>
                Doctors
              </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="/services" onClick={hideSidebar}>
                Services
              </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="/about" onClick={hideSidebar}>
                About
              </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="/contact" onClick={hideSidebar}>
                Contact
              </Link>
            </span>
          </li>
        </ul>
      </Sidebar>
      <Button
        icon={<FaBars style={{ fontSize: "24px" }} />}
        style={{
          borderRadius: "8px",
        }}
        onClick={() => setVisible(true)}
      />
    </Fragment>
  );
}

export default memo(Sidenav);
