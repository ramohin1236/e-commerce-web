"use client";

import React, { use, useState } from "react";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import { FaStar, FaRegStar, FaHeart, FaShoppingCart, FaChevronDown } from "react-icons/fa";

interface Props {
  params: Promise<{ id: string }>;
}

const ProductDetailsPage = ({ params }: Props) => {
  const { id } = use(params);
  const product = products.find((p) => p.slug === id);

  if (!product) return notFound();

  const images = product.images && product.images.length > 0 ? product.images : (product.image ? [product.image] : []);
  const [activeImage, setActiveImage] = useState(images[0] || "");

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= Math.floor(rating) ? (
          <FaStar key={i} className="text-blue-600 w-5 h-5" />
        ) : (
          <FaRegStar key={i} className="text-gray-300 w-5 h-5" />
        )
      );
    }
    return stars;
  };

  const infoSections = [
    { title: "Product details", content: product.description },
    { title: "Vendor details", content: "Vendor info goes here." },
    { title: "Return & exchange", content: "Return policy goes here." },
  ];


  return (
    <div className="p-4 max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
      {/* Left images */}
      <div className="flex gap-2">
        <div className="flex flex-col gap-2 w-16 shrink-0">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={product.name}
              className={`aspect-[64/85] object-cover cursor-pointer border-b-2 ${activeImage === img ? "border-black" : "border-transparent"
                }`}
              onClick={() => setActiveImage(img)}
            />
          ))}
        </div>
        <div className="flex-1">
          <img
            src={activeImage}
            alt={product.name}
            className="w-full aspect-[548/712] object-cover"
          />
        </div>
      </div>

      {/* Right details */}
      <div className="space-y-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold">{product.name}</h1>
          <p className="text-sm text-gray-500 mt-1">{product.shortDescription}</p>

          <div className="flex items-center gap-4 mt-4">
            <h2 className="text-2xl font-bold">${product.price.toFixed(2)}</h2>
            {product.originalPrice && (
              <span className="text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          <div className="flex items-center gap-2 mt-2">
            {renderStars(product.rating)}
            <span className="text-sm text-gray-500">({product.reviewCount} reviews)</span>
          </div>
        </div>

        {/* Sizes */}
        <div>
          <h3 className="font-semibold text-sm mb-2">Sizes</h3>
          <div className="flex gap-2 flex-wrap">
            {["SM", "MD", "LG", "XL"].map((size) => (
              <button
                key={size}
                className={`px-3 py-1 border rounded text-sm ${size === "MD" ? "border-blue-600" : "border-gray-300"
                  }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            <FaShoppingCart /> Add to Cart
          </button>
          <button className="flex items-center justify-center p-2 border border-gray-300 rounded hover:bg-gray-100">
            <FaHeart />
          </button>
        </div>

        {/* Product Info Accordion */}
        <div className="space-y-2">
          {infoSections.map((section, i) => (
            <details key={i} className="border border-gray-200 rounded">
              <summary className="flex justify-between items-center px-4 py-2 cursor-pointer font-medium">
                {section.title} <FaChevronDown />
              </summary>
              <div className="px-4 py-2 text-sm text-gray-500">{section.content}</div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
