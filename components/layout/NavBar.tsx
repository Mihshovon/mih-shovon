import Link from "next/link";
import { Button } from "../ui/button";

export default function NavBar() {
  return (
    <nav className="flex gap-4">
      <Link href="/about">
        <Button variant="ghost" className="cursor-pointer hover:text-cyan-500">
          About
        </Button>
      </Link>
      <Link href="/blog">
        <Button variant="ghost" className="cursor-pointer hover:text-cyan-500">
          Blog
        </Button>
      </Link>
      <Link href="/projects">
        <Button variant="ghost" className="cursor-pointer hover:text-cyan-500">
          Projects
        </Button>
      </Link>
    </nav>
  );
}
