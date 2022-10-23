import Navigation from "../components/Navigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto">
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
