import { getData , getAllAColoumns } from "../../api/URls";
import { GET_DATA ,GET_COLOUMN_DATA } from "../actionTypes";

export const getAllColumnsData =()=> dispatch =>{
  getAllAColoumns().then(res=> {
    dispatch({type: GET_DATA , payload : res.data})
  })
}



export const getColoumnData =(body)=> dispatch =>{
  getData(body).then(res=> {
    dispatch({type: GET_COLOUMN_DATA , payload : res.data})
  })
}
