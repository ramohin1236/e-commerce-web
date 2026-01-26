"use client";

interface ColorFilterProps {
    colors: string[];
}

export default function ColorFilter({ colors }: ColorFilterProps) {
    return (
        <div>

            <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                    <button
                        key={color}
                        type="button"
                        className="w-6 h-6 rounded-full cursor-pointer border border-gray-100"
                        style={{ backgroundColor: color }}
                    ></button>
                ))}
            </div>
        </div>
    );
}
