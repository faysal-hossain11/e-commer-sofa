import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Product1 from '@/app/assets/images/products/product6.jpg';
import Product2 from '@/app/assets/images/products/product5.jpg';
import Product3 from '@/app/assets/images/products/product4.jpg';
import Breadcrumb from '@/components/Breadcrumb';


const wishListPage = () => {
    return (
        <div className="container mx-auto gap-6 pt-4 pb-16">
            {/* this component breadrumb */}
            <Breadcrumb />

            {/* start the wishlist item */}
            <div className="mx-auto space-y-4 max-w-6xl">
                <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                    <div className="w-28">
                        <Image src={Product1} alt="product 6" className="w-full" />
                    </div>
                    <div className="w-1/3">
                        <h2 className="text-gray-800 text-xl font-medium uppercase">Italian L shape</h2>
                        <p className="text-gray-500 text-sm">Availability: <span className="text-green-600">In Stock</span></p>
                    </div>
                    <div className="text-primary text-lg font-semibold">$320.00</div>
                    <Link href="#"
                        className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">add
                        to cart</Link>

                    <div className="text-gray-600 cursor-pointer hover:text-primary">
                        <i className="fa-solid fa-trash"></i>
                    </div>
                </div>

                <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                    <div className="w-28">
                        <Image src={Product2} alt="product 6" className="w-full" />
                    </div>
                    <div className="w-1/3">
                        <h2 className="text-gray-800 text-xl font-medium uppercase">Dining Table</h2>
                        <p className="text-gray-500 text-sm">Availability: <span className="text-green-600">In Stock</span></p>
                    </div>
                    <div className="text-primary text-lg font-semibold">$320.00</div>
                    <a href="#"
                        className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">add
                        to cart</a>

                    <div className="text-gray-600 cursor-pointer hover:text-primary">
                        <i className="fa-solid fa-trash"></i>
                    </div>
                </div>

                <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                    <div className="w-28">
                        <Image src={Product3} alt="product 6" className="w-full" />
                    </div>
                    <div className="w-1/3">
                        <h2 className="text-gray-800 text-xl font-medium uppercase">Sofa</h2>
                        <p className="text-gray-500 text-sm">Availability: <span className="text-red-600">Out of Stock</span></p>
                    </div>
                    <div className="text-primary text-lg font-semibold">$320.00</div>
                    <a href="#"
                        className="cursor-not-allowed px-6 py-2 text-center text-sm text-white bg-red-400 border border-red-400 rounded transition uppercase font-roboto font-medium">add
                        to cart</a>

                    <div className="text-gray-600 cursor-pointer hover:text-primary">
                        <i className="fa-solid fa-trash"></i>
                    </div>
                </div>
            </div>
            {/* end the wishlist item */}

        </div>
    );
};

export default wishListPage;