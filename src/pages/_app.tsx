import type { AppProps } from "next/app";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReduxProvider from "HOC/reduxProvider";
import { ConfigProvider as AntdConfigProvider } from "antd";
import theme from "config/themeConfig";

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <AntdConfigProvider theme={theme}>
          <ReduxProvider>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </ReduxProvider>
        </AntdConfigProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
