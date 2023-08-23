import { Provider } from "react-redux";
import { FC, PropsWithChildren } from "react";
import { store } from "@/redux/store";

const ReduxProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
