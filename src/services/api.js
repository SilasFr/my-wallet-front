import axios from 'axios';

const PORT = 5000;

const baseAPI = axios.create({ baseURL: `http://localhost:${PORT}` });

export default baseAPI;
