import axios from "axios";

axios.defaults.baseURL = "https://fb-downloader-server.vercel.app";

const axiosSecure = axios.create({
  // You can add custom configuration here if needed
});
export default axiosSecure;
