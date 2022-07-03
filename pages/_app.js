import AppLayout from "components/applayout";
import "../sass/style.scss";

export default function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
