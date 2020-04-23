import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dnd from "./Dnd";
import Chart from "./Chart";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Main = () => {
  const classes = useStyles();
  const [coords, setCoords] = useState({ dimension: "", measure: "" });

  const changeCoords = ({ name, function: fn = "" }) => {
    setCoords({ ...coords, [fn]: name });
  };

  return (
    <div>
      <Dnd changeCoords={changeCoords} />
      <Chart coords={coords} />
    </div>
  );
};

export default Main;
