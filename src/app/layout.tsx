import { FC, PropsWithChildren } from "react";
import CommonLayout from "components/layout/home";

import AppConfig from "./config";
import { NextAuthProvider } from "./providers";

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>FSS</title>
      </head>
      <body>
        <AppConfig>
          <NextAuthProvider>
            <CommonLayout>{children}</CommonLayout>
          </NextAuthProvider>
        </AppConfig>
      </body>
    </html>
  );
};

export default RootLayout;
