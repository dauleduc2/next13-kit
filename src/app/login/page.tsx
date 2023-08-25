"use client";

import Link from "next/link";
import { FunctionComponent } from "react";
import { Typography, Button, Space } from "antd";
import { GetServerSideProps } from "next";
import { signIn } from "next-auth/react";
interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  return (
    <Space.Compact direction="vertical">
      <Typography>Login page</Typography>
      <Link href="/">
        <Button type="primary" danger>
          go to home
        </Button>
        <Button
          type="primary"
          onClick={() => {
            signIn("google", {
              redirect: true,
              callbackUrl: "http://localhost:3000",
            });
          }}
        >
          login
        </Button>
      </Link>
    </Space.Compact>
  );
};

export const getServerSideProps: GetServerSideProps<{
  test: string;
}> = async () => {
  return {
    props: {
      test: "",
    },
  };
};

export default Dashboard;
