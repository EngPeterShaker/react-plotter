import React, { useEffect, useState } from "react";
import { DragDropContainer, Draggable, Droppable } from "react-draggable-hoc";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";

import { getAllColumnsData } from "../redux/actions/index";
const useStyles = makeStyles(theme => ({
  chip: {
    width: "25em",
    margin: '1em',
    cursor:'pointer',
    padding: '1.5em'
  }
}));

const Dnd = props => {
  const { changeCoords } = props;
  const dispatch = useDispatch();
  const classes = useStyles();

  const [droppedDimension, changeDroppedDimension] = useState([]);
  const [droppedMeasure, changeDroppedMeasure] = useState([]);
  const colomns = useSelector(({ data }) => data.coloumns);

  useEffect(() => {
    dispatch(getAllColumnsData());
  }, [dispatch]);

  const onDropDimension = ({ dragProps }) => {
    if (dragProps.function === "dimension") {
      changeDroppedDimension([dragProps]);
      changeCoords(dragProps);
    }
  };
  const onDropMeasure = ({ dragProps }) => {
    if (dragProps.function === "measure") {
      changeDroppedMeasure([dragProps]);
      changeCoords(dragProps);
      //:: TODO :: accept 2 measures
      // changeDroppedMeasure([...droppedMeasure, dragProps]);
    }
  };

  return (
    <DragDropContainer className="Simple-page-container">
      <Grid container>
        <Grid item xs='3'>
      <div className="Simple-row scrollable">
        {colomns.map(i => (
          <Draggable key={i.name} dragProps={i} className="Simple-cell">
            <div className="Cell-simple">
              <Chip
              className={classes.chip}
                label={`${i.name} -- ${i.function}`}
                color={i.function === "dimension" ? "primary" : "secondary"}
              >
                <span>
                  {i.name} - {i.function}
                </span>
              </Chip>
            </div>
          </Draggable>
        ))}
      </div>

        </Grid>
        <Grid item xs='8'>

      <Droppable onDrop={onDropDimension}>
        {({ isHovered, ref, dragProps }) => (
          <div
            className="Simple-bin"
            ref={ref}
            style={{
              backgroundColor: isHovered ? "rgba(0, 130, 20, 0.2)" : undefined,
            }}
          >
            {dragProps ? "Drop it here" : "Start dragging Dimensions here"}
            {droppedDimension.length > 0 && (
              <div>
                Dimensions:

                {droppedDimension.map(i => {
                  return ( <Chip
                  key={i.name}
                    className={classes.chip}
                      label={`${i.name}`}
                      color={i.function === "dimension" ? "primary" : "secondary"}
                    />
                    )
                })}
                {/* {droppedDimension.map(i => i.name).join(", ")} */}
              </div>
            )}
          </div>
        )}
      </Droppable>
      <Droppable onDrop={onDropMeasure}>
        {({ isHovered, ref, dragProps }) => (
          <div
            className="Simple-bin"
            ref={ref}
            style={{
              backgroundColor: isHovered ? "rgba(0, 130, 20, 0.2)" : undefined,
            }}
          >
            {dragProps ? "Drop it here" : "Start dragging Measures here"}
            {droppedMeasure.length > 0 && (
              <div>
                Measures:
                {droppedMeasure.map(i => {
                  return ( <Chip
                    key={i.name}
                    className={classes.chip}
                      label={`${i.name}`}
                      color={i.function === "dimension" ? "primary" : "secondary"}
                    />
                    )
                })}
                {/* {droppedMeasure.map(i => i.name).join(", ")} */}
              </div>
            )}
          </div>
        )}
      </Droppable>
      </Grid>
      </Grid>
    </DragDropContainer>
  );
};
export default Dnd;
