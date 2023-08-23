import DashboardLayout from "@/components/layout/dashboard";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import Link from "next/link";
import { FunctionComponent } from "react";

interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  return (
    <DashboardLayout>
      <div>current at dashboard</div>
      <Link href="/">
        <button>Go to home Home</button>
      </Link>
    </DashboardLayout>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery(["test"], () =>
    fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
      res.json()
    )
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Dashboard;
