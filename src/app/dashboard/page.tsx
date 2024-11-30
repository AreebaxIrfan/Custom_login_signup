import React from 'react';
import Navbar from './../components/Navbar';
import Image from 'next/image';

const page = () => {
    return (
        <div className='min-h-screen' style={{ backgroundImage: 'url(/image.png)', backgroundSize: 'cover' }}>
            <Navbar />
            <div className=' items-center justify-center pt-48 grid sm:grid-cols-2 gap-11  p-16'>
                <div className="bg-white/30 backdrop-blur-lg border border-sky-400/100 rounded-lg shadow-xl p-10 text-center">
                    <h1 className="text-5xl font-serif font-bold text-white mb-4">Welcome to my website!</h1>
                    <p className=" text-2xl font-semibold text-sky-400"> Where creativity, knowledge, and fun come together ...</p>
                </div>
                <div>
                    <Image src='/dps-1.png'
                    height={100}
                    width={450}
                    alt='image'
                    className=' rounded-xl'/>
                </div>

                
            </div>
        </div>
    )
}

export default page