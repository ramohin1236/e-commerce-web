"use client";

import { useState } from "react";
import PriceFilter from "../filterparts/PriceFilter";
import BrandFilter from "../filterparts/BrandFilter";
import SizeFilter from "../filterparts/SizeFilter";
import ColorFilter from "../filterparts/ColorFilter";
import { FaChevronDown } from "react-icons/fa";

type BrandOption = { id: string; label: string; };
type SizeOption = string;
type ColorOption = string;

interface FilterSidebarProps {
    brands: BrandOption[];
    sizes: SizeOption[];
    colors: ColorOption[];
}

export default function FilterSidebar({ brands, sizes, colors }: FilterSidebarProps) {
    const [openSections, setOpenSections] = useState({
        price: true,
        brand: true,
        size: true,
        color: true,
    });
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleSection = (section: keyof typeof openSections) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const SectionHeader = ({ title, section }: { title: string, section: keyof typeof openSections }) => (
        <div
            className="flex justify-between items-center cursor-pointer py-2"
            onClick={() => toggleSection(section)}
        >
            <h4 className="text-base font-semibold text-slate-900">{title}</h4>
            <FaChevronDown
                className={`text-pink-500 transition-transform duration-300 ${openSections[section] ? "rotate-180" : ""
                    }`}
                size={14}
            />
        </div>
    );

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

            {/* Overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-40 lg:hidden"
                    onClick={() => setMobileOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-white w-72 z-50 transform transition-transform shadow-lg lg:shadow-none
          lg:relative lg:translate-x-0 lg:w-[270px] lg:flex-shrink-0
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* Close mobile */}
                <div className="flex justify-end lg:hidden p-4 border-b border-gray-300">
                    <button onClick={() => setMobileOpen(false)} className="text-slate-600 font-bold text-lg">×</button>
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
                <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-64px)] scrollbar-hide">

                    {/* Price */}
                    <div className="border-b border-gray-200 pb-4">
                        <SectionHeader title="Price" section="price" />
                        {openSections.price && (
                            <div className="mt-2">
                                <PriceFilter />
                            </div>
                        )}
                    </div>

                    {/* Brand */}
                    <div className="border-b border-gray-200 pb-4">
                        <SectionHeader title="Brand" section="brand" />
                        {openSections.brand && (
                            <div className="mt-2">
                                <BrandFilter brands={brands} />
                            </div>
                        )}
                    </div>

                    {/* Size */}
                    <div className="border-b border-gray-200 pb-4">
                        <SectionHeader title="Size" section="size" />
                        {openSections.size && (
                            <div className="mt-2">
                                <SizeFilter sizes={sizes} />
                            </div>
                        )}
                    </div>

                    {/* Color */}
                    <div className="border-b border-gray-200 pb-4">
                        <SectionHeader title="Color" section="color" />
                        {openSections.color && (
                            <div className="mt-2">
                                <ColorFilter colors={colors} />
                            </div>
                        )}
                    </div>

                    {/* Clear All */}
                    <button className="w-full py-2 bg-red-500 text-white rounded-md font-medium mt-4 hover:bg-red-600 transition-colors">
                        Clear all
                    </button>
                </div>
            </div>
        </>
    );
}
