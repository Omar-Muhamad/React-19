import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers: {
    accept: "application/json",
  },
});

export default instance;
