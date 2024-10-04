"use client";

import React, { useState, useRef, useEffect } from "react";
import { User } from "lucide-react";

export default function Component() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-center bg-transparent">
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white"
          aria-label="User menu"
          aria-haspopup="true"
        >
          <User className="h-6 w-6 text-white" />
        </button>
        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
            >
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Login
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Signup
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
