import { getData , getAllAColoumns } from "../../api/URls";
import { GET_DATA ,GET_COLOUMN_DATA } from "../actionTypes";

export const getAllColumnsData =()=> dispatch =>{
  getAllAColoumns().then(res=> {
    console.log('res', res)
    dispatch({type: GET_DATA , payload : res.data})
  })
}



export const getColoumnData =()=> dispatch =>{
  getData().then(res=> {
    console.log('res', res)
    // dispatch
  })
}
