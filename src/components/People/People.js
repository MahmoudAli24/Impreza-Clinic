import Container from "./../../UI/Container";
import rate1 from "../../Assets/rate4.svg";
import rate2 from "../../Assets/rate.svg";
import ava1 from "../../Assets/ava1.jpg";
import ava2 from "../../Assets/ava2.jpg";
import Card from "./../../UI/Card";
import Paragraph from "./../../UI/Paragraph";
import classes from "./People.module.css";
import { memo } from "react";

const content = [
  {
    id: 1,
    title: "Good Service",
    rate: rate1,
    description:
      "Donec placerat nulla egestas vulputate convallis. Sed quis lorem luctus justo placerat placerat. Cras ut libero eget tortor varius rhoncus. Integer eu porttitor sapien, a fermentum sapien. Cras bibendum laoreet justo, id commodo ipsum. Nullam volutpat, orci tempus tempus luctus, mi ligula eleifend sapien, ac auctor arcu mi id nibh. Donec lacinia tristique pharetra",
    name: "Barry Derrickson",
    avatar: ava1,
  },
  {
    id: 2,
    title: "Professional Doctors",
    rate: rate2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet risus finibus, sagittis odio non, sollicitudin tellus. Aliquam finibus rhoncus pulvinar. Vestibulum viverra quis orci eu tincidunt. Praesent ullamcorper metus nec egestas lobortis. Donec porta feugiat luctus. Curabitur tincidunt turpis non purus suscipit lobortis.",
    name: "Kate Coleman",
    avatar: ava2,
  },
];

function People() {
  return (
    <section>
      <Container>
        <div className={classes.people}>
          {content.map((item) => (
            <Card key={item.id}>
              <div className={classes.content}>
                <div className={classes.people__head}>
                  <h3>{item.title}</h3>
                  <span>
                    <img src={item.rate} alt="rate" />
                  </span>
                </div>
                <Paragraph>{item.description}</Paragraph>
                <div className={classes.people__avatar}>
                  <span>
                    <img src={item.avatar} alt="avatar" />
                  </span>
                  <span>{item.name}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default memo(People);
