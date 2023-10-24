import React, { memo } from "react";
import classes from "./DoctorItem.module.css";

function DoctorItem(props) {
  return (
    <div className={classes.doctors__body}>
      {props.DoctorItem.map((doctor) => (
        <div className={classes.doctors__card} key={doctor.id}>
          <div className={classes.doctors__card__img}>
            <img src={doctor.image} alt={doctor.name} />
          </div>
          <div className={classes.doctors__card__info}>
            <h3>{doctor.name}</h3>
            <p>{doctor.designation}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default memo(DoctorItem);
