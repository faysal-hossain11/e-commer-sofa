import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import React from 'react';

const accountPage = () => {
    return (
        <div className='container mx-auto'>
            <Breadcrumb />

            {/* start the account page contant */}
            <div class="container  items-start gap-6 pt-4 pb-16">

                <div class=" grid grid-cols-3 gap-4 mx-auto max-w-5xl">

                    <div class="shadow rounded bg-white px-4 pt-6 pb-8">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="font-medium text-gray-800 text-lg">Personal Profile</h3>
                            <Link href="#" class="text-primary">Edit</Link>
                        </div>
                        <div class="space-y-1">
                            <h4 class="text-gray-700 font-medium">John Doe</h4>
                            <p class="text-gray-800">example@mail.com</p>
                            <p class="text-gray-800">0811 8877 988</p>
                        </div>
                    </div>

                    <div class="shadow rounded bg-white px-4 pt-6 pb-8">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="font-medium text-gray-800 text-lg">Shipping address</h3>
                            <Link href="#" class="text-primary">Edit</Link>
                        </div>
                        <div class="space-y-1">
                            <h4 class="text-gray-700 font-medium">John Doe</h4>
                            <p class="text-gray-800">Medan, North Sumatera</p>
                            <p class="text-gray-800">20371</p>
                            <p class="text-gray-800">0811 8877 988</p>
                        </div>
                    </div>

                    <div class="shadow rounded bg-white px-4 pt-6 pb-8">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="font-medium text-gray-800 text-lg">Billing address</h3>
                            <Link href="#" class="text-primary">Edit</Link>
                        </div>
                        <div class="space-y-1">
                            <h4 class="text-gray-700 font-medium">John Doe</h4>
                            <p class="text-gray-800">Medan, North Sumatera</p>
                            <p class="text-gray-800">20317</p>
                            <p class="text-gray-800">0811 8877 988</p>
                        </div>
                    </div>

                </div>

            </div>
            {/* end the account page contant */}
        </div>
    );
};

export default accountPage;