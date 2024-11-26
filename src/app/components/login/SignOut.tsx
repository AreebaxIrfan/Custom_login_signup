"use client";

import { signOut } from "next-auth/react";

export default function SignIn() {
    return (
        <div>
            <button onClick={() => signOut()}>Sign Out</button>
        </div>
    )
}