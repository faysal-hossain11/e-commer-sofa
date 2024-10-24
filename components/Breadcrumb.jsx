import Link from 'next/link';
import React from 'react';
import { FaHouseDamage } from "react-icons/fa";
import { LuChevronRightSquare } from "react-icons/lu";

const Breadcrumb = () => {
    return (
        <div class="container mx-auto py-4 flex items-center gap-3">
            <Link href="/" class="text-primary text-base">
                <FaHouseDamage />
            </Link>
            <span class=" text-gray-600">
                <LuChevronRightSquare />
            </span>
            <p class="text-gray-600 font-medium">Account</p>
        </div>
    );
};

export default Breadcrumb;