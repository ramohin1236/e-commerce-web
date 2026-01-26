"use client";

import { useState } from "react";

type BrandOption = {
  id: string;
  label: string;
};

type SizeOption = string;
type ColorOption = string;

interface FilterSidebarProps {
  brands: BrandOption[];
  sizes: SizeOption[];
  colors: ColorOption[];
}

export default function FilterSidebar({
  brands,
  sizes,
  colors,
}: FilterSidebarProps) {
  const [brandSearch, setBrandSearch] = useState("");
  const [openSections, setOpenSections] = useState({
    price: true,
    brand: true,
    size: true,
    color: true,
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <>
      {/* Mobile filter button */}
      <div className="lg:hidden mb-4">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="px-4 py-2 bg-pink-500 text-white rounded-md font-medium"
        >
          Filter
        </button>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full bg-white w-72 z-50 transform transition-transform
          lg:relative lg:translate-x-0 lg:w-[270px] lg:flex-shrink-0
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Close button on mobile */}
        <div className="flex justify-end lg:hidden p-4 border-b border-gray-300">
          <button
            onClick={() => setMobileOpen(false)}
            className="text-slate-600 font-bold text-lg"
          >
            ×
          </button>
        </div>

        {/* Search Products */}
        <div className="p-4 border-b border-gray-300">
          <input
            type="text"
            placeholder="Search Products"
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500"
          />
        </div>

        {/* Filter Sections */}
        <div className="p-4 space-y-6 overflow-y-auto h-[calc(100%-64px)]">
          {/* Price */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("price")}
            >
              <h4 className="text-base font-semibold text-slate-900">Price</h4>
              <span
                className={`text-pink-500 transition-transform ${
                  openSections.price ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>
            {openSections.price && (
              <div className="mt-3">
                <input
                  type="range"
                  min={0}
                  max={1000}
                  defaultValue={500}
                  className="w-full h-1.5 bg-gray-300 rounded-lg accent-pink-500 cursor-pointer"
                />
                <div className="flex justify-between mt-2 text-sm text-slate-600 font-medium">
                  <span>$0</span>
                  <span>$1000</span>
                </div>
              </div>
            )}
          </div>

          {/* Brand */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("brand")}
            >
              <h4 className="text-base font-semibold text-slate-900">Brand</h4>
              <span
                className={`text-pink-500 transition-transform ${
                  openSections.brand ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>
            {openSections.brand && (
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Search brand"
                  value={brandSearch}
                  onChange={(e) => setBrandSearch(e.target.value)}
                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500"
                />
                <ul className="mt-2 space-y-1 max-h-40 overflow-y-auto pr-1">
                  {brands
                    .filter((b) =>
                      b.label.toLowerCase().includes(brandSearch.toLowerCase())
                    )
                    .map((brand) => (
                      <li key={brand.id} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id={brand.id}
                          className="w-4 h-4 cursor-pointer"
                        />
                        <label
                          htmlFor={brand.id}
                          className="text-sm font-medium text-slate-600 cursor-pointer"
                        >
                          {brand.label}
                        </label>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>

          {/* Size */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("size")}
            >
              <h4 className="text-base font-semibold text-slate-900">Size</h4>
              <span
                className={`text-pink-500 transition-transform ${
                  openSections.size ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>
            {openSections.size && (
              <div className="mt-3 flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className="px-2 py-1 text-sm text-slate-600 border border-gray-300 rounded-md hover:border-pink-500 transition"
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Color */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("color")}
            >
              <h4 className="text-base font-semibold text-slate-900">Color</h4>
              <span
                className={`text-pink-500 transition-transform ${
                  openSections.color ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>
            {openSections.color && (
              <div className="mt-3 flex flex-wrap gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    className="w-6 h-6 rounded-full cursor-pointer border border-gray-100"
                    style={{ backgroundColor: color }}
                  ></button>
                ))}
              </div>
            )}
          </div>

          {/* Clear All */}
          <button className="w-full py-2 bg-red-500 text-white rounded-md font-medium mt-4">
            Clear all
          </button>
        </div>
      </div>
    </>
  );
}
