"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReduxProvider from "HOC/reduxProvider";
import StyledComponentsRegistry from "../../lib/AntdRegistry";
import theme from "config/theme/themeConfig";
import { ConfigProvider as AntdConfigProvider } from "antd";
import { FC, PropsWithChildren } from "react";
import { initHttpClient } from "config/axios/client";
import { store } from "redux/store";

initHttpClient(store);

const queryClient = new QueryClient();

const AppConfig: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>
        <AntdConfigProvider theme={theme}>
          <ReduxProvider>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </ReduxProvider>
        </AntdConfigProvider>
      </StyledComponentsRegistry>
    </QueryClientProvider>
  );
};

export default AppConfig;
