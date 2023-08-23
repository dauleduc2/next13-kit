import { PropsWithChildren, FC } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <main>this is layout{children}</main>
    </>
  );
};
export default Layout;
