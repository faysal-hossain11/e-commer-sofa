
import RegisterForm from '@/components/auth/RegisterForm';
import SocialLogin from '@/components/auth/SocialLogin';
import Link from 'next/link';
import React from 'react';

const registerPage = () => {
    return (
        <div className="contain py-16">
            <div className="max-w-2xl mx-auto shadow-lg px-6 py-7 rounded overflow-hidden">
                <h2 className="text-4xl uppercase font-bold mb-1 text-center">Create an account</h2>
                <p className="text-gray-600 mb-6 text-xl text-center ">
                    Register for new cosutumer
                </p>
                <RegisterForm />
                <SocialLogin />

                <p className="mt-4 text-center text-gray-600">Already have account? <Link href="/login"
                    className="text-primary">Login now</Link></p>
            </div>
        </div>
    );
};

export default registerPage;