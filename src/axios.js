import axios from "axios";

const instance = axios.create({
  baseURL: "https://frantic-train-lion.cyclic.app",
});

export default instance;
