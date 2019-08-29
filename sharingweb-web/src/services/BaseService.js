import axios from 'axios';


const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL || `http://localhost:3001`,
  withCredentials: true
})

http.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 403 || error.response.status === 401) {
      window.location.assign("http://localhost:3000");
      window.alert("please log in")
    } else {
      return Promise.reject(error);
    }
  }
)

export default http;