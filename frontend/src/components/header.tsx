import { Icons } from "@src/components/icons";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full border-gray-200 p-4 flex justify-center items-center shadow-lg">
      <div className="md:w-10/12 flex justify-center items-center md:justify-start">
        <Link href="/">
          <Icons.logo className="h-16 text-blue-900"/>
        </Link>
      </div>
    </header>
  );
}
