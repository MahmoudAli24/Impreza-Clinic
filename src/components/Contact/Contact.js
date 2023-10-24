import { Link } from "react-router-dom";
import { FaPhoneFlip, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import Container from "../../UI/Container";
import Paragraph from "../../UI/Paragraph";
import Card from "../../UI/Card";
import Icon from "../../UI/Icon";
import pic1 from "../../Assets/1st-pic.jpg";
import pic2 from "../../Assets/2nd-pic.jpg";
import classes from "./Contact.module.css";
import { memo } from "react";

const info = [
  {
    id: 1,
    icon: FaPhoneFlip,
    title: "Phone",
    description: "+1 234 567 8901",
  },
  {
    id: 2,
    icon: FaEnvelope,
    title: "Email",
    description: "info@impreza.com",
  },
  {
    id: 3,
    icon: FaLocationDot,
    title: "Address",
    description: "823 Gateway Center Way, San Diego",
  },
];

function Contact(props) {
  return (
    <section>
      <Container>
        <div className={classes.contact}>
          <Card className={classes.contact__content}>
            <div className={classes.contact__content__head}>
              <h2>{props.text}</h2>
              <Paragraph>
                Override the digital divide with additional clickthroughs from
                DevOps. Nanotechnology immersion along the information
              </Paragraph>
            </div>
            <div className={classes.contact__content__body}>
              {info.map((item) => (
                <div key={item.id} className={classes.contact__content__item}>
                  <div className={classes.contact__content__item__icon}>
                    <Icon name={item.icon} />
                  </div>
                  <div className={classes.contact__content__item__content}>
                    <h3>{item.title}</h3>
                    <Paragraph>{item.description}</Paragraph>
                  </div>
                </div>
              ))}
            </div>
            <div className={classes.contact__content__btns}>
              <span>
                <Link to="/about">More About Clinic</Link>
              </span>
              <span>
                <Link to="/">Google Maps</Link>
              </span>
            </div>
          </Card>
          <div className={classes.contact__images}>
            <div className={classes.contact__images__item}>
              <img src={pic1} alt="pic" />
            </div>
            <div className={classes.contact__images__item}>
              <img src={pic2} alt="pic" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default memo(Contact);
