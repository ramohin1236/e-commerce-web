"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { navItems } from "@/data/navigation";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaShoppingCart,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpenDesktop, setShopOpenDesktop] = useState(false);
  const [shopOpenMobile, setShopOpenMobile] = useState(false);

  const shopRef = useRef<HTMLLIElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Click outside → desktop shop close
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (shopRef.current && !shopRef.current.contains(e.target as Node)) {
        setShopOpenDesktop(false);
      }
      // click outside mobile menu → close menu
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
        setShopOpenMobile(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            MyStore
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item, i) =>
              item.mega ? (
                <li key={i} ref={shopRef} className="relative">
                  <button
                    onClick={() => setShopOpenDesktop(!shopOpenDesktop)}
                    className="flex items-center gap-1 text-sm font-medium text-pink-600 hover:text-pink-500 transition-colors"
                  >
                    {item.label}
                    <FaChevronDown
                      size={12}
                      className={`transition-transform ${
                        shopOpenDesktop ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Mega Menu */}
                  <div
                    className={`absolute left-0 top-10
                    w-[50vw] max-w-2xl bg-white shadow-lg rounded-md
                    transition-all duration-200 origin-top-left
                    ${
                      shopOpenDesktop
                        ? "opacity-100 scale-100 visible"
                        : "opacity-0 scale-95 invisible"
                    }`}
                  >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
                      {item.categories.map((cat, idx) => (
                        <div key={idx}>
                          <h4 className="text-pink-600 text-md font-semibold mb-2">
                            {cat.title}
                          </h4>
                          <ul className="space-y-1">
                            {cat.links.map((link, j) => (
                              <li
                                key={j}
                                className="text-sm text-gray-600 hover:text-pink-600 cursor-pointer transition-colors"
                              >
                                {link}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={i}>
                  <Link
                    href={item.href!}
                    className="text-sm hover:text-pink-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <button className="relative">
              <FaShoppingCart size={18} />
              <span className="absolute -top-2 -right-2 text-[10px] bg-pink-600 text-white rounded-full px-1">
                0
              </span>
            </button>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden transition-all duration-300
          ${menuOpen ? "max-h-[75vh] opacity-100" : "max-h-0 opacity-0"}
          overflow-y-auto scrollbar-hide bg-white mt-2 rounded-md shadow-md`}
        >
          <ul className="mt-2 space-y-2 px-3">
            {navItems.map((item, i) =>
              item.mega ? (
                <li key={i}>
                  <button
                    onClick={() => setShopOpenMobile(!shopOpenMobile)}
                    className="flex justify-between items-center w-full font-medium text-sm py-2 px-2 rounded hover:bg-pink-50 transition-colors"
                  >
                    {item.label}
                    <FaChevronDown
                      size={12}
                      className={`transition-transform ${
                        shopOpenMobile ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {shopOpenMobile && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.categories.map((cat, idx) => (
                        <div key={idx}>
                          <p className="text-pink-600 text-sm font-semibold">
                            {cat.title}
                          </p>
                          {cat.links.map((link, j) => (
                            <p
                              key={j}
                              className="text-sm text-gray-600 ml-2 hover:text-pink-600 transition-colors"
                            >
                              {link}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={i}>
                  <Link
                    href={item.href!}
                    className="block py-2 px-2 text-sm rounded hover:bg-pink-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
