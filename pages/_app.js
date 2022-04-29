import { ThemeProvider } from "../components/ThemeProvider";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const initialTheme = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme");
  }
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ThemeProvider initialTheme={initialTheme()}>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
