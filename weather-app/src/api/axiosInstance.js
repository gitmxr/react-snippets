import axios from "axios";

const instance = axios.create({
      baseURL: "https://newsapi.org/v2",
      timeout: 3000,
    });

    instance.interceptors.request.use(
      function (config) {
        config.params = {
          ...config.params,
          apiKey: "c4ac371a834e4515845eda40b0a1ae1d",
        };
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      },
    );
    export default instance;