'use client';
import React, { useState, useEffect, Suspense } from 'react';
import Sidebar from '../Navbars/sidebar';
import { useSearchParams } from 'next/navigation';
import ViewCard from './viewCard';

function Page() {
    const [active, setActive] = useState('');
    const searchParams = useSearchParams();

    useEffect(() => {
        const algo = searchParams.get('algorithm'); 
        setActive(algo);
    }, [searchParams]);

    if (!active) {
        return <div>Loading algorithm...</div>;
    }

    return (
        <div className='flex flex-row justify-between'>
            <div className='fixed left-5 '>
                <Sidebar activeState={active} />
            </div>
            <div className='xl:ml-[20%]'>
                <Suspense fallback={<div>Loading ViewCard...</div>}>
                    <ViewCard algorithmName={active} />
                </Suspense>
            </div>
        </div>
    );
}

export default Page;
