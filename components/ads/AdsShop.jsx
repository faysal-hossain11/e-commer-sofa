import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AdsImage from '@/app/assets/images/offer.jpg';

const AdsShop = () => {
    return (
        <div class="container mx-auto pb-16">
            <Link href="#">
                <Image src={AdsImage} alt="ads" class="w-full" />
            </Link>
        </div>
    );
};

export default AdsShop;