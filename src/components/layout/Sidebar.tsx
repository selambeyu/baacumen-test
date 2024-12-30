import React from "react";
import Link from "next/link";

interface SidebarProps {
  navItems: { href: string; label: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ navItems }) => {
  return (
    <aside className="bg-slate-100 dark:bg-gray-900 dark:text-white text-black w-64 min-h-screen p-4">
      <nav className="space-y-4 py-16">
        <ul>
          {navItems.map((item) => (
            <li
              key={item.href}
              className="mb-4  hover:font-extrabold hover:text-green-600 content-center text-center justify-start"
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
