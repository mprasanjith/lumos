import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";

const paths = {
  google: ["/dashboard/videos"],
  twitter: ["/dashboard/patientdata"],
  github: ["/dashboard/news", "/dashboard/patientdata"],
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
      !paths[loggedAccount.provider]?.includes(router.pathname)
    ) {
      router.push(paths[loggedAccount.provider]?.[0]);
    }
  }, [isLoaded, isSignedIn, router, user]);
};

export default useAuthRedirect;
