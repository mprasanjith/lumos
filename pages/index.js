import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";
import HomePageHero from "../components/sections/HomePageHero";

export default function Home() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) return;

    const accounts = user.verifiedExternalAccounts;
    const loggedAccount = accounts ? accounts[0] : null;
    if (!loggedAccount) return;

    if (loggedAccount) router.push("/dashboard");
  }, [user, router]);

  return <HomePageHero />;
}
