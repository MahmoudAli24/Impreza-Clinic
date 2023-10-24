import Container from "../../UI/Container";
import Icon from "../../UI/Icon";
import { FaHeart } from "react-icons/fa6";
import { FaClinicMedical } from "react-icons/fa";
import Card from "./../../UI/Card";
import classes from "./TwoCards.module.css";
import Paragraph from "../../UI/Paragraph";
import { Link } from "react-router-dom";
import { memo } from "react";

const Cards = [
  {
    icon: FaHeart,
    title: "Services",
    text: "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    services: [
      "Virtual Care",
      "Illneses",
      "Injures",
      "Physicals",
      "X-Rays",
      "Pediatrics",
      "Consultations",
      "Treatment",
    ],
  },
  {
    icon: FaClinicMedical,
    title: "About Clinic",
    text: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative.",
    services: ["About Us", "Membership", "Team", "Careers"],
  },
];

function TwoCards() {
  return (
    <section>
      <Container>
        <div className={classes["two-cards"]}>
          {Cards.map((card) => (
            <Card key={card.icon}>
              <div className={classes["cards-content"]}>
                <Icon name={card.icon} />
                <h2>{card.title}</h2>
              </div>
              <Paragraph>{card.text}</Paragraph>
              <div className={classes.services}>
                <span>
                  {card.services.map((service) => (
                    <Link key={service} to="/">
                      {service}
                    </Link>
                  ))}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default memo(TwoCards);
