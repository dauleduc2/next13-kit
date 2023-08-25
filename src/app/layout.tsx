import { FC, PropsWithChildren } from "react";
import AppConfig from "./config";
import { NextAuthProvider } from "./providers";
import CommonLayout from "components/layout/home";
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
