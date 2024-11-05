import React from 'react';

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from 'next/link';
import SocialLogin from '@/components/auth/SocialLogin';
import LoginForm from '@/components/auth/LoginForm';
const loginPage = () => {
    return (
        <div className="contain mx-auto py-16">
            <div className="max-w-xl mx-auto shadow-lg px-6 py-7 rounded overflow-hidden">
                <h2 className="text-4xl uppercase font-bold mb-1 text-center">Login</h2>
                <p className="text-gray-600 mb-6 text-xl text-center">
                    welcome back customer
                </p>
                <LoginForm />
                
                <SocialLogin />

                <p className="mt-6 text-center text-gray-600">Dont have account? <Link href="/register"
                    className="text-primary">Register now</Link></p>
            </div>
        </div>
    );
};

export default loginPage;