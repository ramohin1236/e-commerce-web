"use client"
import React from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const ProductPage = () => {
  return (
    <div className="p-4 mx-auto lg:max-w-screen-xl">
      <div className="border-b border-gray-300 pb-4">
        <h2 className="text-slate-900 text-2xl font-bold">Hot list</h2>
        <p className="text-slate-600 mt-2">Out the most popular and trending products.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 min-[1200px]:grid-cols-5 gap-4 mt-8">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;