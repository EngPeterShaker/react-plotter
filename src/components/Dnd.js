import React, {useEffect , useState} from "react";
import { DragDropContainer, Draggable, Droppable } from "react-draggable-hoc";
import {  useDispatch, useSelector} from "react-redux";
import { getAllColumnsData} from "../redux/actions/index";

 const Dnd = () => {
   const dispatch = useDispatch();
  const [droppedDimension, changeDroppedDimension] = useState([]);
  const [droppedMeasure, changeDroppedMeasure] = useState([]);
  const colomns = useSelector(({data}) => data.coloumns);

  useEffect(() => {
    dispatch(getAllColumnsData())
  },[dispatch])

  useEffect(() => {
    dispatch(getAllColumnsData())
  },[dispatch])

  const onDropDimension = ({ dragProps }) => {
    if(dragProps.function === 'dimension' ){
      changeDroppedDimension([dragProps]);
    }
  };
  const onDropMeasure = ({ dragProps }) => {
    if(dragProps.function === 'measure' ){
      changeDroppedMeasure([dragProps]);
      //:: TODO :: accept 2 measures
      // changeDroppedMeasure([...droppedMeasure, dragProps]);
    }
  };


  return (
    <DragDropContainer className="Simple-page-container">
      <div className="Simple-row scrollable">
        {colomns.map(i => (
          <Draggable key={i.name} dragProps={i} className="Simple-cell">
            <div className="Cell-simple">
              <span className="Handle">::::</span>
              <span>{i.name} - {i.function}</span>
            </div>
          </Draggable>
        ))}
      </div>
        <Droppable onDrop={onDropDimension}>
          {({ isHovered, ref, dragProps }) => (
            <div
              className="Simple-bin"
              ref={ref}
              style={{
                backgroundColor: isHovered
                  ? "rgba(0, 130, 20, 0.2)"
                  : undefined,
                border: dragProps ? "1px dashed #ccc" : undefined
              }}
            >
              {dragProps ? "Drop it here" : "Start dragging"}
              {droppedDimension.length > 0 && (
                <div>Dimensions:
                  {droppedDimension
                  .map(i=> i.name)
                  .join(", ")}
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
                backgroundColor: isHovered
                  ? "rgba(0, 130, 20, 0.2)"
                  : undefined,
                border: dragProps ? "1px dashed #ccc" : undefined
              }}
            >
              {dragProps ? "Drop it here" : "Start dragging"}
              {droppedMeasure.length > 0 && (
                    <div>Measures:
                    {droppedMeasure
                    .map(i=> i.name)
                    .join(", ")}
                    </div>
              )}
            </div>
          )}
        </Droppable>
    </DragDropContainer>
  );
};
export default Dnd;