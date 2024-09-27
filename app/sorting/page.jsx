'use client';
import React, { useState, useEffect, Suspense } from 'react';
import Sidebar from '../Navbars/sidebar';
import ViewCard from './viewCard';

function Page() {
    const [active, setActive] = useState('');

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const algo = params.get('algorithm');
        if (algo) {
            setActive(algo);
        }
    }, []);

    return (
        <div className='flex flex-row justify-between'>
            <div className='fixed left-5'>
                <Sidebar activeState={active} />
            </div>
            <div className='xl:ml-[20%]'>
                <Suspense fallback={<div>Loading...</div>}>
                    {active ? (
                        <ViewCard algorithmName={active} />
                    ) : (
                        <div>Loading algorithm...</div> 
                    )}
                </Suspense>
            </div>
        </div>
    );
}

export default Page;
