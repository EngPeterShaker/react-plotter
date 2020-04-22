import axios from "./axios";

export const getAllAColoumns = () => axios.get("/columns");
export const getData = body => axios.post("/data", body);
