"use client";
import { useState } from "react";

export default function PriceFilter() {
  const [price, setPrice] = useState(500);

  return (
    <div>

      <input
        type="range"
        min={0}
        max={1000}
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="w-full h-1.5 bg-gray-300 rounded-lg accent-pink-500 cursor-pointer"
      />
      <div className="flex justify-between mt-2 text-sm text-slate-600 font-medium">
        <span>$0</span>
        <span>$1000</span>
      </div>
    </div>
  );
}
