import { Link } from "react-router-dom";
import Card from "../../UI/Card";
import Container from "../../UI/Container";
import Paragraph from "../../UI/Paragraph";
import { FaHourglassHalf, FaLocationDot } from "react-icons/fa6";
import { FaClinicMedical } from "react-icons/fa";
import classes from "./ContactLocations.module.css";
function ContactLocations() {
  return (
    <section>
      <Container>
        <div className={classes.locations}>
          <div className={classes.locations__header}>
            <h2>Become Part of the Team</h2>
            <Paragraph>
              Our walk-in clinics provide quality medical care the day you need
              it - no appointment necessary. With over 145 locations, treating
              your illness or injury is easy and accessible at NextCare.
            </Paragraph>
          </div>
          <div className={classes.locations__body}>
            <Card>
              <h3>
                <Link to="#">Dermatologist</Link>
              </h3>
              <div className={classes.locations__body__icons}>
                <div>
                  <span>
                    <FaHourglassHalf />
                  </span>
                  <span>Full TIme</span>
                </div>
                <div>
                  <span>
                    <FaClinicMedical />
                  </span>
                  <span>Office</span>
                </div>
                <div>
                  <span>
                    <FaLocationDot />
                  </span>
                  <span>San Diego</span>
                </div>
              </div>
              <div className={classes.locations__btn}>
                <Link to="#">View Vacancy</Link>
              </div>
            </Card>
            <Card>
              <h3>
                <Link to="#">Dermatologist</Link>
              </h3>
              <div className={classes.locations__body__icons}>
                <div>
                  <span>
                    <FaHourglassHalf />
                  </span>
                  <span>Full TIme</span>
                </div>
                <div>
                  <span>
                    <FaClinicMedical />
                  </span>
                  <span>Office</span>
                </div>
                <div>
                  <span>
                    <FaLocationDot />
                  </span>
                  <span>San Diego</span>
                </div>
              </div>
              <div className={classes.locations__btn}>
                <Link to="#">View Vacancy</Link>
              </div>
            </Card>
            <Card>
              <h3>
                <Link to="#">Dermatologist</Link>
              </h3>
              <div className={classes.locations__body__icons}>
                <div>
                  <span>
                    <FaHourglassHalf />
                  </span>
                  <span>Full TIme</span>
                </div>
                <div>
                  <span>
                    <FaClinicMedical />
                  </span>
                  <span>Office</span>
                </div>
                <div>
                  <span>
                    <FaLocationDot />
                  </span>
                  <span>San Diego</span>
                </div>
              </div>
              <div className={classes.locations__btn}>
                <Link to="#">View Vacancy</Link>
              </div>
            </Card>
            <Card>
              <h3>
                <Link to="#">Dermatologist</Link>
              </h3>
              <div className={classes.locations__body__icons}>
                <div>
                  <span>
                    <FaHourglassHalf />
                  </span>
                  <span>Full TIme</span>
                </div>
                <div>
                  <span>
                    <FaClinicMedical />
                  </span>
                  <span>Office</span>
                </div>
                <div>
                  <span>
                    <FaLocationDot />
                  </span>
                  <span>San Diego</span>
                </div>
              </div>
              <div className={classes.locations__btn}>
                <Link to="#">View Vacancy</Link>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactLocations;
