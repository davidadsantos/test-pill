import { Icons } from "@src/components/icons";

export function Footer() {
  return (
    <footer className="w-full py-3 flex justify-center items-center shadow-lg bg-gray-950">
      <div className="md:w-10/12 flex justify-center items-center md:justify-end">
        <Icons.logo className="h-8 text-white" />
      </div>
    </footer>
  );
}
