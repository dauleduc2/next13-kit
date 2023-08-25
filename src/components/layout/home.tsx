"use client";

import { FC, PropsWithChildren } from "react";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";

const CommonLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>{children}</Content>
    </Layout>
  );
};

export default CommonLayout;
