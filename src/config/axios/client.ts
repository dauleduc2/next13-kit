import axios from "axios";

import { addInterceptor } from "./interceptor";
import { Store } from "redux/store";
import { ENV_VARIABLES } from "constants/envVariables";

const httpClient = axios.create({
  baseURL: ENV_VARIABLES.BASE_URL,
  withCredentials: true,
});

export const initHttpClient = (_store: Store) => {
  addInterceptor(httpClient, _store);
};

export default httpClient;
