import { Button, Space, Typography } from "antd";
import HomeLayout from "components/layout/home";
import Link from "next/link";
import { FunctionComponent } from "react";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <HomeLayout>
      <Space.Compact direction="vertical">
        <Typography>current at Home</Typography>
        <Link href="/dashboard">
          <Button type="primary">go to dashboard</Button>
        </Link>
      </Space.Compact>
    </HomeLayout>
  );
};

export default Home;
