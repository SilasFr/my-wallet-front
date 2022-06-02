import axios from 'axios';

const baseAPI = axios.create({
  baseURL: `https://my-wallet-back-silas.herokuapp.com`,
});

export default baseAPI;
