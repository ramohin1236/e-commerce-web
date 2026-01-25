"use client"
import { Product } from '@/types/product';
import Link from 'next/link';
import React from 'react';
import { FaStar, FaRegStar, FaRegHeart } from 'react-icons/fa';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    if (!product) {
        return <div>Loading...</div>;
    }

    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<FaStar key={i} className="text-yellow-400 w-3 h-3 sm:w-3.5 sm:h-3.5" />);
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(<FaRegStar key={i} className="text-yellow-400 w-3 h-3 sm:w-3.5 sm:h-3.5" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-gray-300 w-3 h-3 sm:w-3.5 sm:h-3.5" />);
            }
        }
        return stars;
    };
     
    return (
        <div className="flex flex-col border border-gray-300 shadow-sm rounded-md p-1.5 transition-all relative overflow-hidden hover:shadow-lg bg-white">
            <Link href={`/products/${product.slug}`} className="block group">
                <div className="w-full bg-slate-50 rounded-md overflow-hidden relative">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full aspect-square object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="py-4 px-2 text-left">
                    <h6 className="text-sm font-semibold text-slate-900 line-clamp-2 min-h-[40px] group-hover:text-blue-600 transition-colors">
                        {product.name}
                    </h6>
                    <div className="mt-2">
                        <p className="text-slate-900 font-medium text-sm break-all">
                            <span className="mr-1.5 font-normal text-slate-500">MRP:</span>
                            {product.originalPrice && (
                                <span className="mr-1.5 text-slate-600 line-through">${product.originalPrice.toFixed(2)}</span>
                            )}
                            <span className="text-black font-bold">${product.price.toFixed(2)}</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-1 mt-4">
                        <div className="flex items-center">
                            {renderStars(product.rating)}
                        </div>
                        <span className="ml-1.5 text-xs text-slate-500">({product.reviewCount})</span>
                    </div>
                </div>
            </Link>
            <div className="mt-auto h-10">
                <div className="flex items-center absolute bottom-0 left-0 right-0 w-full h-10">
                    <button
                        type="button"
                        title="Save"
                        className="flex items-center justify-center cursor-pointer border-t border-gray-200 outline-0 h-full w-1/4 hover:bg-gray-100 transition-colors"
                    >
                        <FaRegHeart className="fill-slate-400 w-5 h-5 hover:fill-pink-500 transition-colors" />
                    </button>

                    <button
                        type="button"
                        className="flex items-center justify-center bg-black hover:bg-gray-800 cursor-pointer text-sm text-white font-semibold border-0 outline-0 h-full w-9/12 transition-colors"
                    >
                        Add to Bag
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
