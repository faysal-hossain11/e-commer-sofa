import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegEye, FaRegHeart, FaStar } from 'react-icons/fa';
import Product3 from '@/app/assets/images/products/product3.jpg';
import { FaCartShopping } from 'react-icons/fa6';


const ProductCard = () => {
    return (
        <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
              <Image src={Product3} alt="product 1" className="w-full" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <Link href="#"
                  className="text-white text-lg w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="view product">
                  <FaRegEye />
                </Link>

              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <Link href="#">
                <h4 className="uppercase font-semibold text-xl mb-2 text-gray-800 hover:text-primary transition">Couple Sofa</h4>
              </Link>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-semibold">$45.00</p>
                <p className="text-sm text-gray-400 line-through">$55.90</p>
              </div>
              <div className="flex items-center py-2">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                  <span><FaStar /></span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <div className="flex gap-3 pb-4 px-4">
              <Link href="#"
                className="w-full py-[10px] text-center text-white bg-primary hover:bg-black transition-all duration-300 flex items-center justify-center gap-3 font-semibold rounded "
                title="add to wishlist">
                <FaRegHeart />
                Wishlist
              </Link>
              <Link href="#"
                className="w-full py-[10px] text-center text-white bg-primary hover:bg-black transition-all duration-300 flex items-center justify-center gap-3 font-semibold rounded "><FaCartShopping /> Add to cart</Link>
            </div>
          </div>
    );
};

export default ProductCard;