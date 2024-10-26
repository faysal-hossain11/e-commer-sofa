import Link from 'next/link';
import React from 'react';
import { FaHouseDamage } from "react-icons/fa";
import { LuChevronRightSquare } from "react-icons/lu";

const Breadcrumb = () => {
    return (
        <div className="container mx-auto py-4 flex items-center gap-3">
            <Link href="/" className="text-primary text-base">
                <FaHouseDamage />
            </Link>
            <span className=" text-gray-600">
                <LuChevronRightSquare />
            </span>
            <p className="text-gray-600 font-medium">Account</p>
        </div>
    );
};

export default Breadcrumb;