import { ThemeProvider } from "../components/ThemeProvider";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";

const initialTheme = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme");
  }
};

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <ThemeProvider initialTheme={initialTheme()}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
