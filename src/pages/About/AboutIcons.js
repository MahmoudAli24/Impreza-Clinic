import { lazy, memo } from "react";
import classes from "./AboutIcons.module.css";
import {
  FaCommentMedical,
  FaStethoscope,
  FaRegFaceSmile,
  FaPercent,
} from "react-icons/fa6";

const LazyParagraph = lazy(() => import("./../../UI/Paragraph"));
const LazyIcon = lazy(() => import("./../../UI/Icon"));
const LazyCard = lazy(() => import("./../../UI/Card"));

const cards = [
  {
    id: 1,
    icon: FaCommentMedical,
    title: "Top Physicians",
  },
  {
    id: 2,
    icon: FaStethoscope,
    title: "Affordability",
  },
  {
    id: 3,
    icon: FaRegFaceSmile,
    title: "Short Wait Times",
  },
  {
    id: 4,
    icon: FaPercent,
    title: "Convenience",
  },
];
function AboutIcons() {
  return (
    <section>
      <div className={classes.aboutIcons}>
        <div className={classes.aboutIcons__text}>
          <h2>
            The Best Doctors, Innovative Technologies and Modern Equipment
          </h2>
          <LazyParagraph>
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day, going forward, a new normal that
            has evolved from generation
          </LazyParagraph>
        </div>
        <div className={classes.aboutIcons__cards}>
          {cards.map((card) => (
            <LazyCard key={card.id}>
              <LazyIcon name={card.icon} />
              <h3>{card.title}</h3>
            </LazyCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(AboutIcons);
