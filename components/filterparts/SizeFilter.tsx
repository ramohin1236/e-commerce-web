"use client";

interface SizeFilterProps {
    sizes: string[];
}

export default function SizeFilter({ sizes }: SizeFilterProps) {
    return (
        <div>

            <div className="flex flex-wrap gap-2">
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
        </div>
    );
}
