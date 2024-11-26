import React from 'react'
import { SessionWrapper } from "./SessionWrapper";
import SignOut from './login/SignOut'
import { auth } from '../lib/auth';
import Link from 'next/link';
const Navbar = async () => {
    const session = await auth();
    const isAuthticated = !!session?.user;
    return (
        <div className='bg-black mx-auto flex justify-between items-center p-3'>
            <div className='text-white'>
                <h1>My website</h1>
            </div>
            <div>
                <div className='bg-slate-300 px-2 py-2 rounded-md space-x-4 m-1'><SessionWrapper>
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