"use client";

import { Layout } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import { FC, PropsWithChildren } from "react";

const CommonLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>{children}</Content>
    </Layout>
  );
};

export default CommonLayout;
