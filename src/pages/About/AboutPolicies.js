import classes from "./AboutPolicies.module.css";
import { Link } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import Card from "../../UI/Card";
import { lazy, memo } from "react";

const LazyParagraph = lazy(() => import("./../../UI/Paragraph"));

function AboutPolicies() {
  return (
    <section>
      <div className={classes.aboutPolicies}>
        <div className={classes.aboutPolicies__text}>
          <h2>Dedicated Care From Expert Clinicians</h2>
          <LazyParagraph>
            Select from our Individual or Family policies
          </LazyParagraph>
        </div>
        <div className={classes.aboutPolicies__cards}>
          <Card className={classes.aboutPolicies__card}>
            <div className={classes.aboutPolicies__card__header}>
              <h4>Individual</h4>
              <h1>$350</h1>
            </div>
            <LazyParagraph>Cover for 1 adult and 1 child</LazyParagraph>
            <div className={classes.aboutPolicies__card__body}>
              <ul>
                <li>
                  <FaCircleCheck />
                  <LazyParagraph>
                    Members, rates on our in-clinic services
                  </LazyParagraph>
                </li>
                <li>
                  <FaCircleCheck />
                  <LazyParagraph>
                    Permanent registration at Impreza Clinic
                  </LazyParagraph>
                </li>
                <li>
                  <FaCircleCheck />
                  <LazyParagraph>Priority access to services</LazyParagraph>
                </li>
                <li>
                  <FaCircleCheck />
                  <LazyParagraph>
                    Permanent registration at Impreza Clinic
                  </LazyParagraph>
                </li>
              </ul>
            </div>
            <div className={classes.aboutPolicies__card__footer}>
              <Link to="/contact">Join Now</Link>
            </div>
          </Card>
          <Card className={classes.aboutPolicies__card}>
            <div className={classes.aboutPolicies__card__header}>
              <h4>Individual</h4>
              <h1>$850</h1>
            </div>
            <LazyParagraph>Cover for 2 adult and 2 child</LazyParagraph>
            <div className={classes.aboutPolicies__card__body}>
              <ul>
                <li>
                  <FaCircleCheck />
                  <LazyParagraph>
                    Members, rates on our in-clinic services
                  </LazyParagraph>
                </li>
                <li>
                  <FaCircleCheck />
                  <LazyParagraph>
                    Permanent registration at Impreza Clinic
                  </LazyParagraph>
                </li>
                <li>
                  <FaCircleCheck />
                  <LazyParagraph>Priority access to services</LazyParagraph>
                </li>
                <li>
                  <FaCircleCheck />
                  <LazyParagraph>
                    Permanent registration at Impreza Clinic
                  </LazyParagraph>
                </li>
              </ul>
            </div>
            <div className={classes.aboutPolicies__card__footer}>
              <Link to="/contact">Join Now</Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default memo(AboutPolicies);
