import axios from 'axios';

const api = axios.create({
  baseURL: window.location.hostname==="localhost" ?'http://localhost:5000/api':'/api',
  withCredentials: true // important for httpOnly cookie refresh
});
api.interceptors.request.use(config => {
  const token = localStorage.getItem("AccessToken");
  console.log(">>> Interceptor ran. Token:", token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  console.log(">>> Final config:", config);
  return config;
});
export default api;
