import React from 'react';
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

const Home = () => {
    return (
        <div className="w-full h-screen pt-40 bg-gradient-to-r from-black to-gray-950">
        <h1 className='text-white font-bold text-xl md:text-2xl flex justify-between items-center'>
        Welcome to Shahmir Pantry Tracker !
        </h1>
<div className='flex gap-x-4'>
        <LoginLink className='px-5 py-2.5 bg-white rounded-md flex justify-center items-center text-black font-semibold text-md'>Sign in</LoginLink>
<RegisterLink className='px-5 py-2.5 bg-white rounded-md flex justify-center items-center text-black font-semibold text-md'>Sign up</RegisterLink>
</div>
        </div>
    );
}

export default Home;