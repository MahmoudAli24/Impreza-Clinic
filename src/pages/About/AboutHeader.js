import { memo } from "react";
import classes from "./AboutHeader.module.css";
function AboutHeader() {
  return (
    <section>
      <div className={classes["about-header"]}>
        <div className={classes["about-header__text"]}>
          <h1>Modern Clinic With Full Spectrum Services</h1>
        </div>
      </div>
    </section>
  );
}

export default memo(AboutHeader);
