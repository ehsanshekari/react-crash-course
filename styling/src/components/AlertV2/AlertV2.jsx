import Cancel from "../../icons/Cancel";
import Check from "../../icons/Check";
import classes from "./AlertV2.module.css";

function AlertV2({ text, type }) {

   
  return (
    <div
      className={`${classes.alert} ${type === "success" ? classes.success : classes.error}`}
    >
      {type === "success" ? <Check /> : <Cancel />}
      <p>{text}</p>
    </div>
  );
}

export default AlertV2;
