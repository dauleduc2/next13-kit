"use client";

import { FunctionComponent } from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Button, Space, Typography } from "antd";
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
