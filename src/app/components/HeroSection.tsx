import React from 'react'

const HeroSection = () => {
    return (
        <div className='min-h-screen bg-black'>
            <div>
                <body className="bg-black flex items-center justify-center min-h-screen" style={{ backgroundImage: 'url(/image.png)', backgroundSize: 'cover' }}>
                    <div className="bg-black/30 backdrop-blur-lg border border-sky-400/100 pb-16 pt-16 rounded-lg shadow-xl p-11 text-center">
                        <h1 className="text-5xl font-bold font-serif text-white mb-4">Hi👋! Welcome to the page</h1>
                        <p className="text-sky-400 text-2xl font-semibold">Please ! Sign In the page ...</p>
                    </div>
                </body>
            </div>
        </div>
    )
}

export default HeroSection