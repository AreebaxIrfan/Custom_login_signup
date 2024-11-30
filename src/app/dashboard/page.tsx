import React from 'react';
import Navbar from './../components/Navbar';

const page = () => {
    return (
        <div className='min-h-screen' style={{ backgroundImage: 'url(/image.png)', backgroundSize: 'cover' }}>
            <Navbar />
            <div className='flex items-center justify-center pt-52 '>
                <div className="bg-white/30 backdrop-blur-lg border border-white/50 rounded-lg shadow-xl  p-10 text-center">
                    <h1 className="text-2xl font-bold text-white mb-4">Welcome Back to our website</h1>
                    <p className="text-white">Your account registerd ...</p>
                </div>

                
            </div>
        </div>
    )
}

export default page