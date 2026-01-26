"use client";
import { useState } from "react";

type BrandOption = { id: string; label: string; };

interface BrandFilterProps {
    brands: BrandOption[];
}

export default function BrandFilter({ brands }: BrandFilterProps) {
    const [brandSearch, setBrandSearch] = useState("");

    return (
        <div>

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
                            <input type="checkbox" id={brand.id} className="w-4 h-4 cursor-pointer" />
                            <label htmlFor={brand.id} className="text-sm font-medium text-slate-600 cursor-pointer">
                                {brand.label}
                            </label>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
