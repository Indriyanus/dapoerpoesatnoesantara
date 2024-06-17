'use client';
import dynamic from 'next/dynamic';
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const ClientCarousel = dynamic(() => import('../../components/carousel/index'), { ssr: false });

export default function Contact() {
    return (
        <>
            <ClientCarousel />

            <section>
                <div>
                    <p className='py-2 px-5 flex justify-center text-2xl md:text-4xl font-bold'>
                        CONTACT
                    </p>
                </div>
            </section>
            <section className='py-10 px-5 md:px-10 flex flex-col md:flex-row gap-10'>
                <section id='kiri' className='flex-1 w-full px-20 '>
                    <div className='font-bold text-center md:text-left mb-6'>
                        <p className='mb-3 item-center'>
                            PT. DAPOER POESAT NOESANTARA GROUP
                        </p>
                    </div>
                    <div className='flex gap-5 items-start mb-6'>
                        <FaMapMarkerAlt className='mt-1' />
                        <div>
                            <p>TOWER SEQUIS CENTER 9TH FLOOR NO. 902</p>
                            <p>JL. JEND. SUDIRMAN 71, Kelurahan Senayan, Kec. Kebayoran Baru,</p>
                            <p>Adm. Jakarta Selatan, Provinsi DKI Jakarta, Kode Pos: 12190.</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center mb-6'>
                        <BsFillTelephoneFill />
                        <p>+6221 55 77 9999</p>
                    </div>
                    <div className='flex gap-5 items-center mb-6'>
                        <MdEmail />
                        <p>corporate@dapoerpoesatnoesantara.co.id</p>
                    </div>
                </section>
                <section id='kanan' className='flex-2 w-full'>
                    <div className='mb-6'>
                        <p className='font-bold text-center md:text-left'>DROP US A LINE.</p>
                        <p className='mb-5 font-bold text-center md:text-left'>OUR TEAM IS READY TO SERVE.</p>
                    </div>
                    <div className='gap-10'>
                        <div className='w-full mb-5'>
                            <input
                                name='text'
                                type='text'
                                placeholder='Name'
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className='w-full mb-5'>
                            <input
                                name='text'
                                type='text'
                                placeholder='Company Name'
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className='w-full mb-5'>
                            <input
                                name='text'
                                type='text'
                                placeholder='Email'
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className='w-full mb-5'>
                            <input
                                name='text'
                                type='text'
                                placeholder='Phone'
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className='w-full mb-5'>
                            <input
                                name='text'
                                type='text'
                                placeholder='Project Type'
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div >
                            <button className='btn bg-black shadow-md appearance-none py-1 px-2 rounded text-white w-full '>
                                Submit
                            </button>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
