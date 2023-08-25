import { AxiosInstance } from "axios";
import { Store } from "redux/store";

export const addInterceptor = (clientInstance: AxiosInstance, _store: Store) => {
  clientInstance.interceptors.request.use(async (config) => {
    return config;
  });

  clientInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      return Promise.reject(error);
    },
  );
};
