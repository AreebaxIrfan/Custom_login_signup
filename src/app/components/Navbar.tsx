import React from 'react'
import { SessionWrapper } from "./SessionWrapper";
import SignOut from './login/SignOut'
import { auth } from '../lib/auth';
import Link from 'next/link';
const Navbar = async () => {
    const session = await auth();
    const isAuthticated = !!session?.user;
    return (
        <div className='fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-lg border-b-2 border-sky-400/100 rounded-b-xl shadow-xl rounded-e-lg mx-auto flex justify-between items-center p-3 bg-mirror bg-opacity-30'>
            <div className='text-white'>
                <h1 className='text-sky-400 font-bold font-sans text-3xl'>My website</h1>
            </div>
            <div>
                <div className='bg-sky-400 hover:bg-sky-300 px-2 py-2 rounded-md space-x-4 m-1'><SessionWrapper>
                    {
                        isAuthticated ?
                            <SignOut /> :
                           <Link href='/signIn'>Sign-in</Link>
                    }
                </SessionWrapper></div>
            </div>
        </div>
    )
}

export default Navbar