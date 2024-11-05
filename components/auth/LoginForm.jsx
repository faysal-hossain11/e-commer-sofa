"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';


const LoginForm = () => {

    const [error, setError] = useState("");
    const router = useRouter(); 

    async function onSubmit (event) {
        event.preventDefault();

        try{
            const formData = new FormData(event.currentTarget);
            const response = await login(formData);

            if(response.error) {
                setError(response.error);
            } else{
                router.push("/");
            }
        } catch(err){
            setError(err.message)
        }
        

    }

    return (
        <>
            <div>
                {error && (
                    <p className='text-center text-red-400'>{error}</p>
                )}
            </div>
            <form action="#" method="post" autocomplete="off" onSubmit={onSubmit}>
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
                            placeholder="password" />
                    </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center">
                        <input type="checkbox" name="remember" id="remember"
                            className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                        <label for="remember" className="text-gray-600 ml-3 cursor-pointer">Remember me</label>
                    </div>
                    <Link href="#" className="text-primary">Forgot password</Link>
                </div>
                <div className="mt-5">
                    <button type="submit"
                        className="block w-full py-2 text-center text-white bg-primary rounded hover:bg-black transition-all duration-300 uppercase font-roboto font-semibold">Login</button>
                </div>
            </form>
        </>
    );
};

export default LoginForm;