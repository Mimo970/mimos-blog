import "../styles/globals.css";
import BlogProvider from "../contexts/BlogContext";
export default function App({ Component, pageProps }) {
  return (
    <BlogProvider>
      <Component {...pageProps} />
    </BlogProvider>
  );
}
