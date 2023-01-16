import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import BlogProvider from "../contexts/BlogContext";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <UserProvider>
        <BlogProvider>
          <Component {...pageProps} />
        </BlogProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
