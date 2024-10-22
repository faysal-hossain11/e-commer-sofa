import Image from "next/image";
import Link from "next/link";
import DsliveryVan from '@/app/assets/images/icons/delivery-van.svg';
import MoneyBack from '@/app/assets/images/icons/money-back.svg';
import ServiceHours from '@/app/assets/images/icons/service-hours.svg';
import Catetory1 from '@/app/assets/images/category/category-1.jpg';
import Catetory2 from '@/app/assets/images/category/category-2.jpg';
import Catetory3 from '@/app/assets/images/category/category-3.jpg';
import Catetory4 from '@/app/assets/images/category/category-4.jpg';
import Catetory5 from '@/app/assets/images/category/category-5.jpg';
import Catetory6 from '@/app/assets/images/category/category-6.jpg';
import Product1 from '@/app/assets/images/products/product1.jpg';
import Product2 from '@/app/assets/images/products/product2.jpg';
import Product3 from '@/app/assets/images/products/product3.jpg';
import Product4 from '@/app/assets/images/products/product4.jpg';

import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
export default function Home() {
  return (
    <>
      <div className="bg-cover bg-no-repeat bg-center py-36 bg-[url('assets/images/banner-bg.jpg')]" >
        <div className="container mx-auto">
          <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
            best collection for <br /> home decoration
          </h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam <br />
            accusantium perspiciatis, sapiente
            magni eos dolorum ex quos dolores odio</p>
          <div className="mt-12">
            <Link href="#" className="bg-primary text-white px-8 py-4 
                    rounded hover:bg-black font-semibold transition-all duration-300 ">Shop Now</Link>
          </div>
        </div>
      </div>

      {/* start the features card  */}
      <div className="container mx-auto py-16">
        <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <Image src={DsliveryVan} alt="Delivery" className="w-12 h-12 object-contain" />
            <div>
              <h4 className="font-medium capitalize text-lg">Free Shipping</h4>
              <p className="text-gray-500 text-sm">Order over $200</p>
            </div>
          </div>
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <Image src={MoneyBack} alt="Delivery" className="w-12 h-12 object-contain" />
            <div>
              <h4 className="font-medium capitalize text-lg">Money Rturns</h4>
              <p className="text-gray-500 text-sm">30 days money returs</p>
            </div>
          </div>
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <Image src={ServiceHours} alt="Delivery" className="w-12 h-12 object-contain" />
            <div>
              <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
              <p className="text-gray-500 text-sm">Customer support</p>
            </div>
          </div>
        </div>
      </div>
      {/* end the features card  */}

      {/* start the category card */}
      <div className="container mx-auto py-16">
        <h2 className="text-3xl text-gray-800 uppercase mb-6 font-semibold">shop by category</h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="relative rounded-sm overflow-hidden group">
            <Image src={Catetory1} alt="category 1" className="w-full" />
            <Link href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Bedroom</Link>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <Image src={Catetory2} alt="category 1" className="w-full" />
            <Link href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Mattrass</Link>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <Image src={Catetory3} alt="category 1" className="w-full" />
            <Link href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Outdoor
            </Link>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <Image src={Catetory4} alt="category 1" className="w-full" />
            <Link href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Sofa</Link>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <Image src={Catetory5} alt="category 1" className="w-full" />
            <Link href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Living
              Room</Link>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <Image src={Catetory6} alt="category 1" className="w-full" />
            <Link href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Kitchen</Link>
          </div>
        </div>
      </div>
      {/* end the category card */}

      {/* start the new arrival card */}
      <div className="container mx-auto pb-16">
        <h2 className="text-3xl text-gray-800 uppercase mb-6 font-semibold">top new arrival</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
              <Image src={Product1} alt="product 1" className="w-full" />
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
                <h4 className="uppercase font-semibold text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer Chair</h4>
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
          <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
              <Image src={Product2} alt="product 1" className="w-full" />
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
                <h4 className="uppercase font-semibold text-xl mb-2 text-gray-800 hover:text-primary transition">Bed King Size</h4>
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
          <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
              <Image src={Product4} alt="product 1" className="w-full" />
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
                <h4 className="uppercase font-semibold text-xl mb-2 text-gray-800 hover:text-primary transition">Mattrass</h4>
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
        </div>
      </div>
      {/* end the new arrival card */}
    </>
  );
}
