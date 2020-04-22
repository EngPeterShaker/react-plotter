import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://plotter-task.herokuapp.com/',
  timeout: 5000,
  headers: {'Content-Type': 'application/json'}
});
 export default Axios;