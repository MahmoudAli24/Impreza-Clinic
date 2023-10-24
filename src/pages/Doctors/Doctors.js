import React, { memo } from "react";
import Container from "../../UI/Container";
import Paragraph from "../../UI/Paragraph";
import classes from "./Doctors.module.css";
import pic1 from "../../Assets/doctors/doctor-1.jpg";
import pic2 from "../../Assets/doctors/doctor-2.jpg";
import pic3 from "../../Assets/doctors/doctor-3.jpg";
import pic4 from "../../Assets/doctors/doctor-4.jpg";
import pic5 from "../../Assets/doctors/doctor-5.jpg";
import pic6 from "../../Assets/doctors/doctor-6.jpg";
import pic7 from "../../Assets/doctors/doctor-7.jpg";
import pic8 from "../../Assets/doctors/doctor-8.jpg";
import DoctorItem from "./DoctorItem";

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
  {
    id: 5,
    name: "Jason Riley",
    designation: "Dentist",
    image: pic5,
  },
  {
    id: 6,
    name: "Catrin Neuman",
    designation: "Urologist",
    image: pic6,
  },
  {
    id: 7,
    name: "Yolanda Barlett",
    designation: "Gynecological",
    image: pic7,
  },
  {
    id: 8,
    name: "Mary Overby",
    designation: "Pediatrician",
    image: pic8,
  },
];

function Doctors() {
  return (
    <section>
      <Container>
        <div className={classes.doctors}>
          <div className={classes.doctors__head}>
            <h1>Our Professionals Doctors</h1>
            <Paragraph>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
            </Paragraph>
          </div>
          <DoctorItem DoctorItem={doctorsInfo} />
        </div>
      </Container>
    </section>
  );
}

export default memo(Doctors);
