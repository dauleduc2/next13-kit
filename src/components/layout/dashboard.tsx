import { FC, PropsWithChildren } from "react";

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>This is Dashboard Layout</div>
      {children}
    </div>
  );
};

export default DashboardLayout;
