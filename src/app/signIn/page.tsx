"use client";
import { signIn } from "next-auth/react";
import React from 'react';

const Page = () => {
  const handleSignIn = (provider: string) => {
    signIn(provider, { callbackUrl: "/" }); 
  };
  return (
    <div className="flex flex-col justify-center items-center m-8 pt-7 shadow-2xl sm:mx-32 md:mx-48 lg:mx-64 xl:mx-96 bg-gray-50 rounded-xl border-2 border-gray-200">
      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="text-xl font-bold text-gray-800 mb-2">Sign in to this site</h1>
        <p className="text-gray-700">Welcome! Please sign in to continue</p>
      </div>
      <div className="flex flex-row space-x-3 mb-3">
        <button className="px-8 py-2 shadow-md bg-gray-100 rounded-sm hover:bg-gray-200"  onClick={() => handleSignIn("github")}>
          Github
        </button>
        <button className="px-8 py-2 shadow-md bg-gray-100 rounded-sm hover:bg-gray-200"     onClick={() => handleSignIn("google")}>
          Google
        </button>
      </div>

      <p className="m-2">or</p>
      <div className="flex flex-col w-full px-5 sm:px-8 md:px-12 lg:px-16 mb-5">
        <div className="mb-3">
          <label
            htmlFor="email"
            className="font-bold text-gray-700 block mb-1"
          >
            Email or Username
          </label>
          <input
            id="email"
            type="text"
            placeholder="user@email.com"
            className="border-2 border-gray-300 block w-full rounded-md py-1 px-3 bg-blue-50 focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="font-bold text-gray-700 block mb-1"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="********"
            className="border-2 border-gray-300 block w-full rounded-md py-1 px-3 bg-blue-50 focus:ring focus:ring-blue-200"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button className="bg-slate-600 text-white px-12 mb-5 py-2 font-bold rounded-md hover:bg-slate-700">
        Continue
      </button>
    </div>
  );
};

export default Page;
