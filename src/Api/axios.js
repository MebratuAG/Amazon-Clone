import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-e0f76/us-central1/api",
  baseURL: "https://amazon-api-deploy-s6m7.onrender.com",
});
export { axiosInstance };
