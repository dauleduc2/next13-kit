import HomeLayout from "@/components/layout/home";
import Link from "next/link";
import { FunctionComponent } from "react";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <HomeLayout>
      <div>current at Home</div>
      <Link href="/dashboard">
        <button>dashboard</button>
      </Link>
    </HomeLayout>
  );
};

export default Home;
