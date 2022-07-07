import Link from "next/link";

const getNavLink = [
  { id: 1, target: "home", page: "/" },
  { id: 2, target: "service", page: "/service" },
  { id: 3, target: "project", page: "/projet" },
  { id: 4, target: "aboutme", page: "/aboutme" },
  { id: 5, target: "contact", page: "/contact" },
];

export default function Navbar(second) {
  return (
    <>
      <nav>
        <ul>
          {getNavLink.map((item) => (
            <li key={item.id}>
              <Link href={item.page}>{item.target}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
