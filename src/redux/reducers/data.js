import { GET_DATA, GET_COLOUMN_DATA } from "../actionTypes";

const initalState = {
  data: {},
  coloumns: []
};

const getAllData = (state, action) => {
  console.log('action', action)
  return {...state ,
    coloumns : action.payload};
};

const getColoumnData = (state, action) => {
  return state;
};

export default (state = initalState, action) => {
  switch (action.type) {
    case GET_DATA:
      return getAllData(state, action);
    case GET_COLOUMN_DATA:
      return getColoumnData(state, action);
    default:
      return state;
  }
};
