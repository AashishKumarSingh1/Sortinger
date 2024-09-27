'use client';
import React, { useState, useEffect, Suspense } from 'react';
import Sidebar from '../Navbars/sidebar';
import { useSearchParams } from 'next/navigation';
import ViewCard from './viewCard';

function Page() {
    return (
        <div className='flex flex-row justify-between'>
            <Suspense fallback={<div>Loading sidebar...</div>}>
                <SidebarWrapper />
            </Suspense>
            <div className=''>
                <Suspense fallback={<div>Loading...</div>}>
                    <ViewCardWrapper />
                </Suspense>
            </div>
        </div>
    );
}

function SidebarWrapper() {
    const searchParams = useSearchParams();
    const [active, setActive] = useState('');

    useEffect(() => {
        const algo = searchParams.get('algorithm'); 
        if (algo) {
            setActive(algo);
        }
    }, [searchParams]);

    return <Sidebar activeState={active} />;
}

function ViewCardWrapper() {
    const searchParams = useSearchParams();
    const [active, setActive] = useState('');

    useEffect(() => {
        const algo = searchParams.get('algorithm'); 
        if (algo) {
            setActive(algo);
        }
    }, [searchParams]);

    return active ? (
        <ViewCard algorithmName={active} />
    ) : (
        <div>Loading algorithm...</div> 
    );
}

export default Page;
