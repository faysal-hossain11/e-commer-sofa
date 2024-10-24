import React from 'react';

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from 'next/link';
const loginPage = () => {
    return (
        <div className="contain mx-auto py-16">
            <div className="max-w-xl mx-auto shadow-lg px-6 py-7 rounded overflow-hidden">
                <h2 className="text-4xl uppercase font-bold mb-1 text-center">Login</h2>
                <p className="text-gray-600 mb-6 text-xl text-center">
                    welcome back customer
                </p>
                <form action="#" method="post" autocomplete="off">
                    <div className="space-y-2">
                        <div>
                            <label for="email" className="text-gray-600 mb-2 block">Email address</label>
                            <input type="email" name="email" id="email"
                                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="youremail.@domain.com" />
                        </div>
                        <div>
                            <label for="password" className="text-gray-600 mb-2 block">Password</label>
                            <input type="password" name="password" id="password"
                                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="*******" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                        <div className="flex items-center">
                            <input type="checkbox" name="remember" id="remember"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                            <label for="remember" className="text-gray-600 ml-3 cursor-pointer">Remember me</label>
                        </div>
                        <a href="#" className="text-primary">Forgot password</a>
                    </div>
                    <div className="mt-5">
                        <button type="submit"
                            className="block w-full py-2 text-center text-white bg-primary rounded hover:bg-black transition-all duration-300 uppercase font-roboto font-semibold">Login</button>
                    </div>
                </form>

                <div className="mt-7 flex justify-center relative">
                    <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">Or login with</div>
                    <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
                </div>
                <div className="mt-6 flex justify-center gap-4 text-center">
                    <Link href="#"
                        className="w-1/2 mx-auto py-2 flex justify-center border items-center gap-3"><FaFacebook className='text-blue-500 text-xl' />Continue with facebook</Link>
                    <Link href="#"
                        className="w-1/2 mx-auto py-2 flex justify-center text-sm border items-center gap-3"><FcGoogle className='text-xl' /> Continue with google</Link>
                </div>

                <p className="mt-6 text-center text-gray-600">Dont have account? <a href="register.html"
                    className="text-primary">Register
                    now</a></p>
            </div>
        </div>
    );
};

export default loginPage;