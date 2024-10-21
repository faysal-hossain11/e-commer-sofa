import React from 'react';
import Sofa from '@/app/assets/images/icons/sofa.svg';
import Terrace from '@/app/assets/images/icons/terrace.svg';
import Office from '@/app/assets/images/icons/office.svg';
import OutdoorCafe from '@/app/assets/images/icons/outdoor-cafe.svg';
import Bed2 from '@/app/assets/images/icons/bed-2.svg';
import Bed from '@/app/assets/images/icons/bed.svg';
import Image from 'next/image';
import Link from 'next/link';

const Categorys = () => {
    return (
        <div class="absolute left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible w-[600px]" >
            <Link href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                <Image src={Sofa} alt="sofa" class="w-5 h-5 object-contain" />
                    <span class="ml-6 text-gray-600 text-sm">Sofa</span>
            </Link >
            <Link href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                <Image src={Terrace} alt="terrace" class="w-5 h-5 object-contain" />
                    <span class="ml-6 text-gray-600 text-sm">Living Room</span>
            </Link >
            <Link href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                <Image src={Bed} alt="bed" class="w-5 h-5 object-contain" />
                    <span class="ml-6 text-gray-600 text-sm">Bedroom</span>
            </Link >
            <Link href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                <Image src={Office} alt="Outdoor" class="w-5 h-5 object-contain" />
                    <span class="ml-6 text-gray-600 text-sm">Outdoor</span>
            </Link >
            <Link href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                <Image src={OutdoorCafe} alt="outdoor" class="w-5 h-5 object-contain" />
                    <span class="ml-6 text-gray-600 text-sm">Outdoor</span>
            </Link >
            <Link href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                <Image src={Bed2} alt="Mattress" class="w-5 h-5 object-contain" />
                    <span class="ml-6 text-gray-600 text-sm">Mattress</span>
            </Link >
        </div>
    );
};

export default Categorys;