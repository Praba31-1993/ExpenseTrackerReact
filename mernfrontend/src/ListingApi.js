import axios from "axios";

// Register Api
export function RegisterUser(params) {
  return axios.post(`${process.env.REACT_APP_API_URL}/signup`, params);
}
export function LoginUser(params) {
    return axios.post(`${process.env.REACT_APP_API_URL}/login`, params);
  }
  