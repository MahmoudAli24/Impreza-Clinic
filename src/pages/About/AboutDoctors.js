import pic1 from "../../Assets/doctors/doctor-1.jpg";
import pic2 from "../../Assets/doctors/doctor-2.jpg";
import pic3 from "../../Assets/doctors/doctor-3.jpg";
import pic4 from "../../Assets/doctors/doctor-4.jpg";
import { Link } from "react-router-dom";
import Paragraph from "../../UI/Paragraph";
import classes from "./AboutDoctors.module.css";
import { lazy, memo } from "react";

const LazyDoctorItem = lazy(() => import("./../Doctors/DoctorItem"));
const doctorsInfo = [
  {
    id: 1,
    name: "Sherman Collins",
    designation: "Dentist",
    image: pic1,
  },
  {
    id: 2,
    name: "Dennis Ross",
    designation: "Therapist",
    image: pic2,
  },
  {
    id: 3,
    name: "Jose Sellers",
    designation: "Cardiologist",
    image: pic3,
  },
  {
    id: 4,
    name: "Johny Hayes",
    designation: "Traumatologist",
    image: pic4,
  },
];

function AboutDoctors() {
  return (
    <section>
      <div className={classes.aboutDoctors}>
        <div className={classes.aboutDoctors__header}>
          <div className={classes.aboutDoctors__header_text}>
            <h2>The Best Doctors in Their Field</h2>
            <Paragraph>
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation.
            </Paragraph>
          </div>
          <div className={classes.aboutDoctors__header_button}>
            <Link to="/doctors">View All Doctors</Link>
          </div>
        </div>
        <LazyDoctorItem DoctorItem={doctorsInfo} />
      </div>
    </section>
  );
}

export default memo(AboutDoctors);
