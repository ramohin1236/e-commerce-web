"use client";
import React from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import FilterSidebar from "@/components/layout/filterSidebar";

const ProductPage = () => {
  return (
    <div className="p-4 mx-auto lg:max-w-screen-xl">
      {/* Header */}
      <div className="border-b border-gray-300 pb-4">
        <h2 className="text-slate-900 text-2xl font-bold">Hot list</h2>
        <p className="text-slate-600 mt-2">
          Out the most popular and trending products.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6 mt-8">
        {/* Sidebar - Filter */}
        <div className="lg:w-[270px] flex-shrink-0">
          <FilterSidebar
            brands={[
              { id: "zara", label: "Zara" },
              { id: "hm", label: "H&M" },
              { id: "uniqlo", label: "Uniqlo" },
              { id: "nike", label: "Nike" }
            ]}
            sizes={["XS", "S", "M", "L", "XL"]}
            colors={["#000000", "#ffffff", "#f87171", "#60a5fa", "#a855f7"]}
          />
        </div>

        {/* Products Grid */}
        <div className="flex-1 max-h-[80vh] overflow-y-auto scrollbar-hide">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 min-[1200px]:grid-cols-5 gap-4">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
