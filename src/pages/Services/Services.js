import { useState } from "react";
import Container from "./../../UI/Container";
import Paragraph from "./../../UI/Paragraph";
import ServicesItems from "./ServicesItems";
import FilterServices from "./FilterServices";
import classes from "./Services.module.css";

const services = [
  {
    id: 1,
    title: "Consultations",
    items: [
      {
        id: 1,
        title: "General Health Appointment",
        time: "4 hours",
        cost: 220,
      },
    ],
  },
  {
    id: 2,
    title: "Covid",
    items: [
      {
        id: 1,
        title: "PCR Test",
        time: "10 minutes",
        cost: 20,
      },
    ],
  },
  {
    id: 3,
    title: "Illneses",
    items: [
      {
        id: 1,
        title: "Syringe Injection Into the Muscle",
        time: "40 minutes",
        cost: 60,
      },
    ],
  },
  {
    id: 4,
    title: "Injures",
    items: [
      {
        id: 1,
        title: "Treatment of Primary Healing Wounds",
        time: "1 hour",
        cost: 80,
      },
    ],
  },
  {
    id: 5,
    title: "Pediatrics",
    items: [
      {
        id: 1,
        title: "Re-treatment of the Wound",
        time: "1 hour",
        cost: 120,
      },
    ],
  },
  {
    id: 6,
    title: "Physicals",
    items: [
      {
        id: 1,
        title: "Determination of Blood Sugar",
        time: "20 minutes",
        cost: 50,
      },
    ],
  },
  {
    id: 7,
    title: "Treatment",
    items: [
      {
        id: 1,
        title: "Cleansing Enema",
        time: "30 minutes",
        cost: 60,
      },
    ],
  },
  {
    id: 8,
    title: "Virtual Care",
    items: [
      {
        id: 1,
        title: "Measurement of Central Venous Pressure",
        time: "50 minutes",
        cost: 90,
      },
    ],
  },
  {
    id: 9,
    title: "X-Rays",
    items: [
      {
        id: 1,
        title: "CT Scan",
        time: "20 minutes",
        cost: 35,
      },
    ],
  },
];

function Services() {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <section>
      <Container>
        <div className={classes.services}>
          <div className={classes.services__head}>
            <h1>Our Healthcare Services</h1>
            <Paragraph>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </Paragraph>
          </div>
        </div>
        <div className={classes.services__filter}>
          <FilterServices
            services={services}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        </div>
        <div className={classes.services__list}>
          <ServicesItems services={services} selectedItems={selectedItems} />
        </div>
      </Container>
    </section>
  );
}

export default Services;
