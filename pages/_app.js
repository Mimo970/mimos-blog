import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import BlogProvider from "../contexts/BlogContext";
export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <BlogProvider>
        <Component {...pageProps} />
      </BlogProvider>
    </UserProvider>
  );
}
