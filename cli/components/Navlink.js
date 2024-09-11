"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ children, href }) {
  const pathName = usePathname();
  console.log(pathName);
  const active = pathName === href;
  const activeClass = active ? "bg-gray-600 inline-block  p-2 rounded-lg" : "";

  return (
    <div className={activeClass}>
      <Link
        href={href}
        className=" text-gray-100 font-semibold text-lg   hover:text-gray-400"
      >
        {children}
      </Link>
    </div>
  );
}
