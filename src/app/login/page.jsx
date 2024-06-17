'use client';

import Image from 'next/image';
import { ImOffice } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";

export default function Login() {
    return (
        <>
            <section id='background' className='flex items-center justify-center h-screen bg-cover bg-center mt-14' style={{backgroundImage:"url('/images/mockup.webp')"}}>
                <section className='bg-white bg-opacity-20 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-sm md:max-w-md'>
                    <p className='text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white text-center'>
                        Login
                    </p>
                    <form>
                        <div id='NIK' className='flex items-center gap-3 sm:gap-5'>
                            <ImOffice className='text-center text-black'/>
                            <input type="text"
                                id='text'
                                className='w-full p-2 sm:p-3 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm text-black focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-white'
                                placeholder='Masukan NIK'/>
                        </div>
                        <div id='Username' className='flex items-center gap-3 sm:gap-5 mt-3'>
                            <AiOutlineUser className='text-center text-black'/>
                            <input type="text"
                                id='text'
                                className='w-full p-2 sm:p-3 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm text-black focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-white'
                                placeholder='Masukan Username'/>
                        </div>
                        <div id='Password' className='flex items-center gap-3 sm:gap-5 mt-3'>
                            <RiLockPasswordFill className='text-center text-black'/>
                            <input type="password"
                                id='password'
                                className='w-full p-2 sm:p-3 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm text-black focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-white'
                                placeholder='Masukan Password'/>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-6 mt-3">
                            <div className='flex items-center'>
                                <input type="checkbox" id='rememberMe' className='mr-2' />
                                <label htmlFor="rememberMe" className="text-white text-sm">Ingatkan Saya</label>
                            </div>
                            <a href="#" className="text-sm text-bold text-white hover:underline mt-2 sm:mt-0">Forgot Password?</a>
                        </div>
                        <button type="submit" className='w-full bg-white text-black font-bold p-2 rounded-lg hover:bg-gray-300 transition duration-300'>
                            Submit
                        </button>
                    </form>
                    <div className='text-center mt-4 sm:mt-6'>
                        <a href="./register" className='text-sm text-white hover:underline'>Belum punya Akun? Register</a>
                    </div>
                </section>
            </section>
        </>
    );
}
