import axios from "axios";
// import { getToken } from "../token/Token";

export const http = axios.create({
  baseURL: 'http://172.20.10.3:8000',
})
