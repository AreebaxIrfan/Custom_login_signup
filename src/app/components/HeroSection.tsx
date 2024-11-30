import React from 'react'

const HeroSection = () => {
    return (
        <div className='min-h-screen bg-black'>
            <div>
                <body className="bg-black flex items-center justify-center min-h-screen" style={{ backgroundImage: 'url(/image.png)', backgroundSize: 'cover' }}>
                    <div className="bg-white/30 backdrop-blur-lg border border-white/50 rounded-lg shadow-xl p-10 text-center">
                        <h1 className="text-2xl font-bold text-white mb-4">Hi👋! Welcome to te page</h1>
                        <p className="text-white">Please ! Sign In the page ...</p>
                    </div>
                </body>
            </div>
        </div>
    )
}

export default HeroSection