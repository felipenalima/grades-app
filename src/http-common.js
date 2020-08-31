import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'https://gradesapi-challenge.herokuapp.com/grade',
  headers: {
    'Content-type': 'application/json',
  },
});
