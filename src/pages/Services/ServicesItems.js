import React from "react";
import { Fragment } from "react";
import Card from "../../UI/Card";
import { Link } from "react-router-dom";
import Paragraph from "../../UI/Paragraph";
import classes from "./ServicesItems.module.css";

function ServicesItems({ services, selectedItems }) {
  // Filter services based on selectedItems
  const filteredServices = selectedItems.length
    ? services.filter((service) => selectedItems.includes(service.id))
    : services;

  return (
    <Fragment>
      {filteredServices.map((service) =>
        service.items.map((item) => (
          <Card key={item.title} className={classes["service-item"]}>
            <h2 className={classes.title}>
              <Link to="/">{item.title}</Link>
            </h2>
            <Paragraph>Procedure Time: {item.time}</Paragraph>
            <Paragraph>Cost: ${item.cost}</Paragraph>
            <span className={classes.btn}>
              <Link to="/">Make an Appointment</Link>
            </span>
          </Card>
        ))
      )}
    </Fragment>
  );
}

export default ServicesItems;
