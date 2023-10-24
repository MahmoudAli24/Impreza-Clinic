import Card from "../../UI/Card";
import Container from "../../UI/Container";
import {
  FaCommentMedical,
  FaStethoscope,
  FaRegFaceSmile,
  FaPercent,
} from "react-icons/fa6";
import Icon from "../../UI/Icon";
import classes from "./Quality.module.css";
import Paragraph from "../../UI/Paragraph";
import { Link } from "react-router-dom";
import { memo } from "react";
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

function Quality() {
  return (
    <section>
      <Container>
        <div className={classes.quality}>
          <div className={classes["quality-icons"]}>
            {cards.map((card) => (
              <Card key={card.id}>
                <div>
                  <Icon name={card.icon} />
                </div>
                <h3>{card.title}</h3>
              </Card>
            ))}
          </div>
          <div className={classes.content}>
            <h2>Quality Urgent Care the Moment You Need It</h2>
            <Paragraph>
              Our walk-in clinics provide quality medical care the day you need
              it no appointment necessary. With over 145 locations, treating
              your illness or injury is easy and accessible at NextCare.
            </Paragraph>
            <span>
              <Link to="/about">Get Care</Link>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default memo(Quality);
