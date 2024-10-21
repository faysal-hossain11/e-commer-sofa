import Image from 'next/image';
import React from 'react';
import Logo from '@/app/assets/images/logo.jpg';
import Link from 'next/link';
import { FaSearch } from "react-icons/fa";
import Categorys from './Categorys';

import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
const Header = () => {
    return (
        <>
            <header class="py-4 shadow-sm bg-white">
                <div class="container mx-auto flex items-center justify-between">
                    <Link href="index.html">
                        <Image src={Logo} alt="Logo" class="w-20" />
                    </Link >

                    <div class="w-full max-w-xl relative flex">
                        <span class="absolute left-4 top-4 text-lg text-gray-400">
                            <FaSearch />
                        </span>
                        <input type="text" name="search" id="search"
                            class="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
                            placeholder="search" />
                        <button
                            class="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-secondary hover:text-white hover:border-secondary font-semibold transition-all duration-300 hidden md:flex items-center">Search</button>
                    </div>

                    <div class="flex items-center gap-5">
                        <Link href="#" class="text-center text-gray-700 hover:text-primary transition relative">
                            <div class="text-2xl">
                                <FaRegHeart />
                            </div>
                            <div
                                class="absolute -right-1 -top-3 w-4 h-4 rounded-full flex items-center justify-center bg-primary text-white text-[13px]">
                                8</div>
                        </Link >
                        <Link href="#" class="text-center text-gray-700 hover:text-primary transition relative">
                            <div class="text-2xl">
                                <FaCartShopping />
                            </div>
                            <div
                                class="absolute -right-3 -top-3 w-4 h-4 rounded-full flex items-center justify-center bg-primary text-white text-[13px]">
                                2</div>
                        </Link >
                        <Link href="#" class="text-center font-semibold text-white bg-primary hover:bg-black py-[10px] px-5 rounded transition-all duration-300 relative">
                            Login
                        </Link >
                    </div>
                </div>
            </header>

            {/*  main header */}

            <nav class="bg-gray-800">
                <div class="container mx-auto flex">
                    <div class="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
                        <span class="text-white">
                            <BiSolidCategory />
                        </span>
                        <span class="capitalize ml-2 text-white ">All Categories</span>

                        {/* cotegory component */}
                        <Categorys />
                    </div>

                    <div class="flex items-center justify-between flex-grow md:pl-12 py-5">
                        <div class="flex items-center space-x-6 capitalize">
                            <Link href="index.html" class="text-gray-200 hover:text-white transition">Home</Link >
                            <Link href="pages/shop.html" class="text-gray-200 hover:text-white transition">Shop</Link >
                            <Link href="#" class="text-gray-200 hover:text-white transition">About us</Link >
                            <Link href="#" class="text-gray-200 hover:text-white transition">Contact us</Link >
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;