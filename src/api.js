import axios from 'axios';
//const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.github.com'
});

//module.exports = api;
export default api;
