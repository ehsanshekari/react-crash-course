import Check from "../icons/Check";
import Cancel from "../icons/Cancel";

function Alert({ text, type }) {
  const styles = {
    backgroundColor: type === "success" ? "green" : "red",
    color: "white",
    padding: "8px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const icon = type === "success" ? <Check /> : <Cancel />;

  return (
    <div style={styles}>
      {icon}
      <p>{text}</p>
    </div>
  );
}

export default Alert;
