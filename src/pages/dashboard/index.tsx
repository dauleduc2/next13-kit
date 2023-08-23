import DashboardLayout from "components/layout/dashboard";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Typography, Button, Space } from "antd";

interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  return (
    <DashboardLayout>
      <Space.Compact direction="vertical">
        <Typography>current at dashboard</Typography>
        <Link href="/">
          <Button type="primary" danger>
            go to home
          </Button>
        </Link>
      </Space.Compact>
    </DashboardLayout>
  );
};

export default Dashboard;
