import { ClerkProvider } from "@clerk/nextjs";
import Navigation from "../components/Navigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider {...pageProps}>
      <div className="container mx-auto">
        <Navigation />
        <Component {...pageProps} />
      </div>
    </ClerkProvider>
  );
}

export default MyApp;
