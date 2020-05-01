import axios from 'axios';
// import { env } from 'config';

const { REACT_APP_API_URL } = process.env;

const token = localStorage.getItem('token');
export default axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    'x-access-token': `${token}`,
    Authorization: `Bearer ${token}`,
    'x-auth-token': `${token}`,
  },
});
