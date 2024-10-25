import Image from 'next/image';
import React from 'react';


import Product1 from '@/app/assets/images/products/product1.jpg';
import Product2 from '@/app/assets/images/products/product2.jpg';
import Product3 from '@/app/assets/images/products/product3.jpg';
import Product4 from '@/app/assets/images/products/product4.jpg';
import Product5 from '@/app/assets/images/products/product5.jpg';
import Product6 from '@/app/assets/images/products/product6.jpg';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { FaRegEye, FaRegHeart, FaStar } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const productDetailsPage = () => {
    return (
        <>
            <Breadcrumb />
            <div class="container mx-auto grid grid-cols-2 gap-6">
                <div>
                    <Image src={Product1} alt="product" class="w-full" />
                    <div class="grid grid-cols-5 gap-4 mt-4">
                        <Image src={Product2} alt="product2"
                            class="w-full cursor-pointer border border-primary" />
                        <Image src={Product3} alt="product2" class="w-full cursor-pointer border" />
                        <Image src={Product4} alt="product2" class="w-full cursor-pointer border" />
                        <Image src={Product5} alt="product2" class="w-full cursor-pointer border" />
                        <Image src={Product6} alt="product2" class="w-full cursor-pointer border" />
                    </div>
                </div>

                <div>
                    <h2 class="text-3xl font-semibold uppercase mb-2">Italian L Shape Sofa</h2>
                    <div class="flex items-center mb-4">
                        <div class="flex gap-1 text-sm text-yellow-400">
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                        </div>
                        <div class="text-xs text-gray-500 ml-3">(150 Reviews)</div>
                    </div>
                    <div class="space-y-2">
                        <p class="text-gray-800 font-semibold space-x-2">
                            <span>Availability: </span>
                            <span class="text-green-600">In Stock</span>
                        </p>
                        <p class="space-x-2">
                            <span class="text-gray-800 font-semibold">Brand: </span>
                            <span class="text-gray-600">Apex</span>
                        </p>
                        <p class="space-x-2">
                            <span class="text-gray-800 font-semibold">Category: </span>
                            <span class="text-gray-600">Sofa</span>
                        </p>
                        <p class="space-x-2">
                            <span class="text-gray-800 font-semibold">SKU: </span>
                            <span class="text-gray-600">BE45VGRT</span>
                        </p>
                    </div>
                    <div class="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                        <p class="text-xl text-primary font-semibold">$45.00</p>
                        <p class="text-base text-gray-400 line-through">$55.00</p>
                    </div>

                    <p class="mt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius eum
                        reprehenderit dolore vel mollitia optio consequatur hic asperiores inventore suscipit, velit
                        consequuntur, voluptate doloremque iure necessitatibus adipisci magnam porro.</p>


                    <div class="mt-4">
                        <h3 class="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
                        <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                            <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                            <div class="h-8 w-8 text-base flex items-center justify-center">4</div>
                            <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-6 pb-4">
                        <Link href="#"
                            className="w-[200px] py-[10px] text-center text-white bg-primary hover:bg-black transition-all duration-300 flex items-center justify-center gap-3 font-semibold rounded "
                            title="add to wishlist">
                            <FaRegHeart />
                            Wishlist
                        </Link>
                        <Link href="#"
                            className="w-[200px] py-[10px] text-center text-white bg-primary hover:bg-black transition-all duration-300 flex items-center justify-center gap-3 font-semibold rounded "><FaCartShopping /> Add to cart</Link>
                    </div>

                    <div class="flex gap-3 mt-4">
                        <Link href="#"
                            class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <FaFacebookF />
                        </Link>
                        <Link href="#"
                            class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <FaTwitter />
                        </Link>
                        <Link href="#"
                            class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
            </div>

            {/* start the product description section */}
            <div class="container mx-auto pb-16 mt-10">
                <h3 class="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-semibold text-2xl">Product details</h3>
                <div class="w-3/5 pt-6">
                    <div class="text-gray-600">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus deleniti natus
                            dolore cum maiores suscipit optio itaque voluptatibus veritatis tempora iste facilis non aut
                            sapiente dolor quisquam, ex ab.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quae accusantium voluptatem
                            blanditiis sapiente voluptatum. Autem ab, dolorum assumenda earum veniam eius illo fugiat possimus
                            illum dolor totam, ducimus excepturi.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia modi ut expedita! Iure molestiae
                            labore cumque nobis quasi fuga, quibusdam rem? Temporibus consectetur corrupti rerum veritatis
                            numquam labore amet.</p>
                    </div>

                </div>
            </div>
            {/* end the product description section */}

            {/* start the related product section */}
            <div className='container mx-auto pb-16 '>
                <h3 className='my-5 font-semibold text-2xl'>Related Products</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
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
            {/* end the related product section */}
        </>
    );
};

export default productDetailsPage;