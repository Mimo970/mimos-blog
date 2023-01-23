import "../styles/globals.css";
import UserProfileProvider from "../contexts/UserProfileContext";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import BlogProvider from "../contexts/BlogContext";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ThemeProvider enableSystem={true} attribute="class">
        <>
          {/* <UserProfileProvider> */}
          <BlogProvider>
            <Component {...pageProps} />
          </BlogProvider>
          {/* </UserProfileProvider> */}
        </>
      </ThemeProvider>
    </UserProvider>
  );
}
