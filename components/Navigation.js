import { useAuth, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useMemo } from "react";

const Navigation = () => {
  const { isLoaded, isSignedIn, signOut } = useAuth();
  const { user } = useUser();

  const loggedAccount = useMemo(() => {
    if (!user) return null;
    const accounts = user.verifiedExternalAccounts;
    const loggedAccount = accounts ? accounts[0] : null;
    return loggedAccount;
  }, [user]);

  const isResearcher = useMemo(
    () => (loggedAccount?.provider === "github" ? true : false),
    [loggedAccount]
  );
  const isPatient = useMemo(
    () => (loggedAccount?.provider === "google" ? true : false),
    [loggedAccount]
  );
  const isDoctor = useMemo(
    () => (loggedAccount?.provider === "microsoft" ? true : false),
    [loggedAccount]
  );

  if (!isLoaded) return null;

  return (
    <header className="flex justify-between items-center py-4 md:py-8">
      <Link href="/">
        <a
          className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
          aria-label="logo"
        >
          <svg
            width="95"
            height="94"
            viewBox="0 0 95 94"
            className="w-6 h-auto text-indigo-500"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
          </svg>
          Lumos
        </a>
      </Link>

      {isResearcher && (
        <nav className="hidden lg:flex gap-12">
          <Link href="/dashboard/news">
            <a className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
              Newsfeed
            </a>
          </Link>
          <Link href="/dashboard/patientdata">
            <a className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
              Datasets
            </a>
          </Link>
          <Link href="/dashboard/reports/map">
            <a className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
              Reports
            </a>
          </Link>
        </nav>
      )}

      {isPatient && (
        <nav className="hidden lg:flex gap-12">
          <Link href="/dashboard/videos">
            <a className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
              Videos
            </a>
          </Link>
          <Link href="/dashboard/reports/me">
            <a className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
              Reports
            </a>
          </Link>
        </nav>
      )}

      {isDoctor && (
        <nav className="hidden lg:flex gap-12">
          <Link href="/dashboard/patientdata">
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
            >
              Datasets
            </a>
          </Link>
          <Link href="/dashboard/reports">
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
            >
              Reports
            </a>
          </Link>
        </nav>
      )}

      {!isSignedIn ? (
        <div className="hidden lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8">
          <Link href="/login">
            <a className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
              Login
            </a>
          </Link>
        </div>
      ) : (
        <div
          onClick={signOut}
          className="hidden lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8"
        >
          <a className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
            Logout
          </a>
        </div>
      )}

      <button
        type="button"
        className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
        Menu
      </button>
    </header>
  );
};

export default Navigation;
