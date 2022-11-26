import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";

const paths = {
  google: "/dashboard/videos",
  github: "/dashboard/patientdata",
  twitter: "/dashboard/news",
};

const useAuthRedirect = () => {
  const { user, isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;

    if (!isSignedIn || !user) {
      router.push("/");
      return;
    }

    const accounts = user.verifiedExternalAccounts;
    const loggedAccount = accounts ? accounts[0] : null;
    if (!loggedAccount) return;

    if (
      router.pathname.startsWith("/dashboard") &&
      router.pathname !== paths[loggedAccount.provider]
    ) {
      router.push(paths[loggedAccount.provider]);
    }
  }, [isLoaded, isSignedIn, router, user]);
};

export default useAuthRedirect;
