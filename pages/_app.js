import { ThemeProvider } from "../components/ThemeProvider";
import "../styles/globals.css";

const initialTheme = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme");
  }
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider initialTheme={initialTheme()}>
        <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
