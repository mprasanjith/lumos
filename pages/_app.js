import { ClerkProvider } from "@clerk/nextjs";
import Navigation from "../components/Navigation";
import "../styles/globals.css";
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 0,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <ClerkProvider {...pageProps}>
        <div className="container mx-auto">
          <Navigation />
          <Component {...pageProps} />
        </div>
      </ClerkProvider>
    </SWRConfig>
  );
}

export default MyApp;
