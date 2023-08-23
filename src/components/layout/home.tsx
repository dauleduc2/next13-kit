import { FC, PropsWithChildren } from "react";

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>This is Home Layout</div>
      {children}
    </div>
  );
};

export default HomeLayout;
