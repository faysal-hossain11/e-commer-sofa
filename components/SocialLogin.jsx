"use client";

import Link from 'next/link';
import React from 'react';

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { signIn } from 'next-auth/react';
const SocialLogin = () => {

    const handleAuth = (event) => {
        signIn("google", {callbackUrl: 'http://localhost:3000'})
    }

    return (
        <>
            <div className="mt-7 flex justify-center relative">
                <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">Or login with</div>
                <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
            </div>
            <div className="mt-6 flex justify-center gap-4 text-center">
                {/* <Link href="#"
                    className="w-1/2 mx-auto py-2 flex justify-center border items-center gap-3"><FaFacebook className='text-blue-500 text-xl' />Continue with facebook</Link> */}
                <button onClick={handleAuth} className="w-full mx-auto py-2 flex justify-center text-sm border items-center gap-3"><FcGoogle className='text-xl' /> Continue with google</button>
            </div>

        </>
    );
};

export default SocialLogin;