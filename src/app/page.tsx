"use client";

import { Button, Space } from "antd";
import Link from "next/link";
import { FunctionComponent } from "react";
import { useSession, signOut } from "next-auth/react";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const props = useSession();

  return (
    <Space.Compact direction="vertical">
      <pre>{JSON.stringify(props, null, 2)}</pre>
      {props.status === "authenticated" ? (
        <Button type="primary" onClick={() => signOut({})}>
          Logout
        </Button>
      ) : (
        <Link href="/login">
          <Button type="primary">go to Login page</Button>
        </Link>
      )}
    </Space.Compact>
  );
};

export default Home;
