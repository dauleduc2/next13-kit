"use client";

import { FC, PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ConfigProvider as AntdConfigProvider } from "antd";
import { initHttpClient } from "config/axios/client";
import theme from "config/theme/themeConfig";
import ReduxProvider from "HOC/reduxProvider";
import { store } from "redux/store";

import StyledComponentsRegistry from "../../lib/AntdRegistry";

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
