import Header from "components/common/header";

// import Link from "next/link";
export default function AppLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* ACA VA EL FOOTER */}
    </>
  );
}
