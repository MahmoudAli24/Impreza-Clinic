import React, { memo } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Container from "../../UI/Container";
import Paragraph from "../../UI/Paragraph";
import doc from "../../Assets/doc.png";
import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
    <section>
      <Container>
        <div className={classes["main-header"]}>
          <div className={classes["main-header__content"]}>
            <h1>We Care About You and Your Health</h1>
            <Paragraph>
              Impreza Clinic offers independent healthcare services to UK
              residents, international visitors, and corporates. Find out more
              about how to access our services.
            </Paragraph>
            <div>
              <form>
                <input
                  type="text"
                  placeholder="Enter a Doctor or Service"
                  aria-label="Search"
                />
                <span aria-label="Search Icon">
                  <FaMagnifyingGlass />
                </span>
              </form>
            </div>
          </div>
          <div className={classes["main-header__img"]}>
            <img src={doc} alt="doctor" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default memo(MainHeader);
