import axios from "axios";
import { ENV_VARIABLES } from "constants/envVariables";
import { Store } from "redux/store";

import { addInterceptor } from "./interceptor";

const httpClient = axios.create({
  baseURL: ENV_VARIABLES.BASE_URL,
  withCredentials: true,
});

export const initHttpClient = (_store: Store) => {
  addInterceptor(httpClient, _store);
};

export default httpClient;
