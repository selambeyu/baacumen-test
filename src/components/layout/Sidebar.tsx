"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  navItems: { href: string; label: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ navItems }) => {
  const pathname = usePathname();

  return (
    <aside className="bg-slate-100 dark:bg-lightBlue dark:text-white text-black w-64 min-h-screen p-4">
      <nav className="space-y-4 py-16">
        <ul>
          {navItems.map((item) => (
            <li
              key={item.href}
              className={`mb-4 content-center text-center justify-start ${
                pathname === item.href
                  ? "font-extrabold text-green-600 bg-gray-200 dark:bg-gray-700"
                  : "hover:font-extrabold hover:text-green-600"
              }`}
            >
              <Link className="block p-2 rounded" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
