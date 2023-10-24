import classes from "./Icon.module.css";
function Icon(props) {
  return (
    <span className={classes.icon}>
      <props.name />
    </span>
  );
}

export default Icon;
