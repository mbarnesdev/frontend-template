import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

const client = (axios: AxiosInstance) => {
  return {
    get: (url: string, config: AxiosRequestConfig = {}) =>
      axios.get(url, config),
    post: (url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.post(url, body, config),
  };
};

export default client(axiosInstance);
