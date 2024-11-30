"use client";
import { signIn } from "next-auth/react";
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa'; // Import specific icons


const Page = () => {
  const handleSignIn = (provider: string) => {
    signIn(provider, { callbackUrl: "/dashboard" });
  };
  return (
    <div className="bg-black w-screen h-screen flex items-center justify-center" style={{ backgroundImage: 'url(/image.png)', backgroundSize: 'cover' }}>
      <div className="flex flex-col justify-center items-center pt-7 sm:mx-32 md:mx-48 lg:mx-64 xl:mx-96 rounded-lg bg-white/20 backdrop-blur-md border border-sky-500/100 shadow-md shadow-gray-700/50 p-8 max-w-sm w-full">
        <div className="flex flex-col justify-center items-center mb-5">
          <h1 className="text-xl font-bold text-white mb-2">Sign in to this site</h1>
          <p className="text-gray-300">Welcome! Please sign in to continue</p>
        </div>
        <div className="flex flex-row space-x-3 mb-3">
          <button className="px-4 py-2 shadow-md bg-gray-100 rounded hover:bg-gray-200 flex items-center" onClick={() => handleSignIn("github")}>
          <FaGithub className="mr-2" />
            Github
          </button>
          <button className="px-4 py-2 shadow-md bg-gray-100 rounded-sm hover:bg-gray-200 flex items-center" onClick={() => handleSignIn("google")}>
          <FaGoogle className="mr-2" /> Google
          </button>
        </div>
        <p className="m-2 text-white">or</p>
        <div className="flex flex-col w-full px-5 sm:px-8 md:px-12 lg:px-16 mb-5">
          <div className="mb-3">
            <label
              htmlFor="email"
              className="font-bold text-gray-300 block mb-1"
            >
              Email or Username
            </label>
            <input
              id="email"
              type="text"
              placeholder="user@email.com"
              className="w-full mt-1 p-2 rounded-md bg-black/70 border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-gray-500 block"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="font-bold text-gray-300 block mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="********"
              className="w-full mt-1 p-2 rounded-md bg-black/70 border border-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button className="py-2 px-5 rounded-md bg-sky-500 hover:bg-sky-600 text-white font-medium">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Page;
