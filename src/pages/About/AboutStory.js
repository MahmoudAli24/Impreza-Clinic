import { memo } from "react";
import Paragraph from "./../../UI/Paragraph";
import pic1 from "../../Assets/about-1.jpg";
import pic2 from "../../Assets/about-2.jpg";
import classes from "./AboutStory.module.css";

function AboutStory() {
  return (
    <section>
      <div className={classes.story}>
        <div className={classes.story__item}>
          <div className={classes.story__item__text}>
            <h2>Our Story</h2>
            <Paragraph>
              In 2010 the practice moved to Summertown, expanding to cover much
              of the top floor of Impreza Clinic in 2017. The practice opened
              satellite offices in Banbury and London in 2018, and then expanded
              nationally in 2021.
            </Paragraph>
          </div>
          <div className={classes.story__item__img}>
            <img src={pic1} alt="our story" />
          </div>
        </div>
        <div className={classes.story__item}>
          <div className={classes.story__item__text}>
            <h2>Our Mission</h2>
            <Paragraph>
              We employ the best medical personnel, and deliver services in a
              private setting, enabling us to see patients when they need and
              for as long as they need.
            </Paragraph>
          </div>
          <div className={classes.story__item__img}>
            <img src={pic2} alt="our story" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(AboutStory);
