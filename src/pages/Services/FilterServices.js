import React from "react";
import classes from "./FilterServices.module.css";

function FilterServices({ services, selectedItems, setSelectedItems }) {
  const toggleSelectHandler = (serviceId) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(serviceId)) {
        return prevSelectedItems.filter((id) => id !== serviceId);
      } else {
        return [...prevSelectedItems, serviceId];
      }
    });
  };

  return (
    <div className={classes.filter}>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <div
              className={`${classes["filter-tap"]} ${
                selectedItems.includes(service.id) ? classes.selected : ""
              }`}
            >
              <label>
                <input
                  type="checkbox"
                  value={service.title}
                  onChange={() => toggleSelectHandler(service.id)}
                />
                <span>{service.title}</span>
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterServices;
