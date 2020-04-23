import { GET_DATA, GET_COLOUMN_DATA } from "../actionTypes";

const initalState = {
  data: {},
  coloumns: []
};

const getAllData = (state, action) => {
  return { ...state, coloumns: action.payload };
};

const getColoumnData = (state, action) => {
  return {
    ...state,
    data: {
      dimension: action.payload[0],
      measure: action.payload[1]
    }
  };
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
