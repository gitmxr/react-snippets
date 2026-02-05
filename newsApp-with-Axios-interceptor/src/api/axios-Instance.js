import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://newsapi.org/v2",
    timeout: 10000,
})

axiosInstance.interceptors.request.use((configs) =>{

      configs.params = {

        ...configs.params, 
        apikey : "c4ac371a834e4515845eda40b0a1ae1d",
      };
      return configs;
  },
  (error) => {
    return Promise.reject (error);
  }
)
export default axiosInstance;