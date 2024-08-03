import React from 'react';
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link'
const Home = async() => {
  const {getUser} = getKindeServerSession();
  const user = await getUser();
    return (
        <div className="w-full h-screen pt-40 md:pt-60 bg-gradient-to-r  from-black to-gray-950">
        <h1 className='text-white font-bold text-3xl md:text-5xl flex justify-center items-center'>
        Welcome to Shahmir Pantry Tracker !
        </h1>
<div className='flex gap-x-4 justify-center'>
      {
      user?.id ?
       (
        <Link href="/Pantry"
         className='px-6 py-3 mt-12 bg-blue-700 hover:bg-blue-600 rounded-md flex justify-center items-center text-white font-semibold text-md '>
         Get Started </Link>) :
          (<div className='flex gap-x-4 justify-center mt-12'><LoginLink className='px-5 py-2.5 bg-white rounded-md flex justify-center items-center text-black hover:bg-gray-200 font-semibold text-md'>Sign in</LoginLink>
<RegisterLink className='px-5 py-2.5 bg-white rounded-md flex justify-center items-center text-black font-semibold text-md hover:bg-gray-200'>Sign up</RegisterLink>
</div>)}</div>
     </div>
    );
}

export default Home;