import Image from 'next/image';
import React from 'react';
import Logo from '@/app/assets/images/logo.jpg';
import Link from 'next/link';
import { FaSearch } from "react-icons/fa";
import Categorys from './Categorys';
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { auth } from '@/auth';
import Logout from './auth/Logout';
const Header = async () => {

    const session = await auth();

    return (
        <>
            <header className="py-4 shadow-sm bg-white">
                <div className="container mx-auto flex items-center justify-between">
                    <Link href="/">
                        <Image src={Logo} alt="Logo" className="w-20" />
                    </Link>

                    <div className="w-full max-w-xl relative flex">
                        <span className="absolute left-4 top-4 text-lg text-gray-400">
                            <FaSearch />
                        </span>
                        <input type="text" name="search" id="search"
                            className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
                            placeholder="search" />
                        <button
                            className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-secondary hover:text-white hover:border-secondary font-semibold transition-all duration-300 hidden md:flex items-center">Search</button>
                    </div>

                    <div className="flex items-center gap-5">
                        <Link href="/wishlist" className="text-center text-gray-700 hover:text-primary transition relative">
                            <div className="text-2xl">
                                <FaRegHeart />
                            </div>
                            <div
                                className="absolute -right-1 -top-3 w-4 h-4 rounded-full flex items-center justify-center bg-primary text-white text-[13px]">
                                8</div>
                        </Link >
                        <Link href="#" className="text-center text-gray-700 hover:text-primary transition relative">
                            <div className="text-2xl">
                                <FaCartShopping />
                            </div>
                            <div
                                className="absolute -right-3 -top-3 w-4 h-4 rounded-full flex items-center justify-center bg-primary text-white text-[13px]">
                                2</div>
                        </Link >

                        {
                            session ? (
                                <button>
                                    <Image 
                                    src={session?.user?.image} 
                                    width={42} 
                                    height={42}  
                                    alt='auth avatar' 
                                    className='rounded-full '
                                />
                                </button>
                            ) : (
                                <Link href="/login" className="text-center font-semibold text-white bg-primary hover:bg-black py-[10px] px-5 rounded transition-all duration-300 relative">
                                Login
                            </Link >          
                            )
                        }
                        <Logout />
                      
                    </div>
                </div>
            </header>

            {/*  main header */}

            <nav className="bg-gray-800">
                <div className="container mx-auto flex">
                    <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
                        <span className="text-white">
                            <BiSolidCategory />
                        </span>
                        <span className="capitalize ml-2 text-white ">All Categories</span>

                        {/* cotegory component */}
                        <Categorys />
                    </div>

                    <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
                        <div className="flex items-center space-x-6 capitalize">
                            <Link href="/" className="text-gray-200 hover:text-white transition">Home</Link >
                            <Link href="/shop" className="text-gray-200 hover:text-white transition">Shop</Link >
                            <Link href="#" className="text-gray-200 hover:text-white transition">About us</Link >
                            <Link href="#" className="text-gray-200 hover:text-white transition">Contact us</Link >
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;