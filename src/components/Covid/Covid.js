import { Link } from "react-router-dom";
import Container from "../../UI/Container";
import classes from "./Covid.module.css";
import Paragraph from "../../UI/Paragraph";
import covid from "../../Assets/covid.jpg";
import { memo } from "react";

function Covid() {
  return (
    <section>
      <Container>
        <div className={classes.covid}>
          <div className={classes["covid-content"]}>
            <h2>Access Our COVID-19 PCR, Antigen and Antibody Services</h2>
            <Paragraph>
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards.
            </Paragraph>
            <span>
              <Link to="/services">Covid Services</Link>
            </span>
          </div>
          <div className={classes["covid-image"]}>
            <img src={covid} alt="covid" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default memo(Covid);
