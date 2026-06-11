import classes from "./App.module.css";
import Component1 from "./components/Component1";

import { Camera } from "lucide-react";
import Cancel from "./icons/Cancel";
import Check from "./icons/Check";
// import Alert from "./components/Alert";
import AlertV2 from "./components/AlertV2/AlertV2";
import StyledExample from "./components/StyledExample";
import AlertV3 from "./components/AlertV3";

import Alert from "@mui/material/Alert";

function App() {
  return (
    <>
      <div className={classes.dark}>This is App Component!</div>
      <Component1 />
      <Camera />
      <Cancel width="72" />
      <Check />
      {/* <Alert text="This is success message" type="success" />
      <Alert text="This is the error message" type="error" /> */}
      <br />
      <hr />
      <AlertV2 text="This is success message" type="success" />
      <AlertV2 text="This is the error message" type="error" />
      <br />
      <hr />
      <StyledExample />
      <br />
      <hr />
      <AlertV3 text="This is success message" type="success" />
      <AlertV3 text="This is the error message" type="error" />
      <br />
      <hr />
      <Alert severity="info">This is a success Alert.</Alert>
    </>
  );
}

export default App;
