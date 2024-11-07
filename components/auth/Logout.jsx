"use client";
import { signOut } from 'next-auth/react';
import React from 'react';

const Logout = () => {
    return (
        <button onClick={() => {
            signOut({ callback: "http://localhost:3000"});
        }} className='bg-primary py-[10px] px-4 rounded-md text-white font-semibold '>
            Logout
        </button>
    );
};


export default Logout;