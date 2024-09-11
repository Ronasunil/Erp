import Link from "next/link";
import { NavLink } from "./Navlink";

export function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <Link href="/">ERP</Link>
        </div>

        <div className="space-x-8 flex items-center">
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/suppliers">Suppliers</NavLink>
          <NavLink href="/inventory">Inventory</NavLink>
          <NavLink href="/reports">Reports</NavLink>
        </div>

        <div>
          <NavLink href="/login">Login</NavLink>
        </div>
      </div>
    </nav>
  );
}
