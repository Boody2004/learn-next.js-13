import Image from "next/image";
import Link from "next/link";
import Logo from "./dojo-logo.png";

export default function Navbar() {
  return (
    <nav>
      <Image src={Logo} alt="Logo" width={70} quality={100} />
      <h1>ToDo</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
