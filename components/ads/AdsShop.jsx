import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AdsImage from '@/app/assets/images/offer.jpg';

const AdsShop = () => {
    return (
        <div className="container mx-auto pb-16">
            <Link href="#">
                <Image src={AdsImage} alt="ads" className="w-full" />
            </Link>
        </div>
    );
};

export default AdsShop;