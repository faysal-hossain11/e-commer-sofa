import Link from 'next/link';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const registerPage = () => {
    return (
        <div className="contain py-16">
            <div className="max-w-2xl mx-auto shadow-lg px-6 py-7 rounded overflow-hidden">
                <h2 className="text-4xl uppercase font-bold mb-1 text-center">Create an account</h2>
                <p className="text-gray-600 mb-6 text-xl text-center ">
                    Register for new cosutumer
                </p>
                <form action="#" method="post" autocomplete="off">
                    <div className="space-y-2">
                        <div>
                            <label for="name" className="text-gray-600 mb-2 block">Full Name</label>
                            <input type="text" name="name" id="name"
                                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="fulan fulana" />
                        </div>
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
                        <div>
                            <label for="confirm" className="text-gray-600 mb-2 block">Confirm password</label>
                            <input type="password" name="confirm" id="confirm"
                                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="*******" />
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="flex items-center">
                            <input type="checkbox" name="aggrement" id="aggrement"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                            <label for="aggrement" className="text-gray-600 ml-3 cursor-pointer">I have read and agree to the <Link
                                href="#" className="text-primary">terms & conditions</Link></label>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button type="submit"
                            className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">create
                            account</button>
                    </div>
                </form>

                <div className="mt-6 flex justify-center relative">
                    <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">Or signup with</div>
                    <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
                </div>
                <div className="mt-6 flex justify-center gap-4 text-center">
                    <Link href="#"
                        className="w-1/2 mx-auto py-2 flex justify-center border items-center gap-3"><FaFacebook className='text-blue-500 text-xl' />Continue with facebook</Link>
                    <Link href="#"
                        className="w-1/2 mx-auto py-2 flex justify-center text-sm border items-center gap-3"><FcGoogle className='text-xl' /> Continue with google</Link>
                </div>

                <p className="mt-4 text-center text-gray-600">Already have account? <Link href="/login"
                    className="text-primary">Login now</Link></p>
            </div>
        </div>
    );
};

export default registerPage;