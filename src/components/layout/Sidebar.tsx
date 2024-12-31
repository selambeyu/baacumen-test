"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  navItems: { href: string; label: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ navItems }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <section>
      <button
        className="md:hidden p-6 bg-slate-100 dark:bg-darkBlue"
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="purple  "
          className="w-6 h-6 dark:bg-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </button>
      <aside
        className={`bg-slate-100 dark:bg-lightBlue dark:text-white text-black w-64 min-h-screen p-4 absolute md:relative z-10 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
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
                <Link
                  className="block p-2 rounded"
                  href={item.href}
                  onClick={handleMenuItemClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </section>
  );
};

export default Sidebar;
