import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

const Dashboard = () => {
  return <AuthenticateWithRedirectCallback />;
};

export default Dashboard;
