import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'https://gradesapp-challenge.herokuapp.com:8081',
  headers: {
    'Content-type': 'application/json',
  },
});
