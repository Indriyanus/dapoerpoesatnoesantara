'use client';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import dynamic from 'next/dynamic';

const ClientCarousel = dynamic(() => import('../../components/carousel/index'), {ssr:false});

export default function Product () {
    return (
        <>
        <ClientCarousel id="jumbotronLogo"/>
            <section className='relative'>
            </section>
            <section>
                <section>
                    <div>
                        <p className="bg-black bg-opacity-30 text-black border-none w-full h-20 flex items-center justify-center rounded-md shadow-lg text-xl md:text-2xl font-bold">
                            OUR PRODUCT
                        </p>
                    </div>
                </section>
                <section className='container mx-auto p-4'>
                    <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center mb-10'>
                        <div className='flex-1 text-center transform hover:scale-150 transition-transform duration-300'>
                            <img src="/images/opticalpower.png" alt="Optical Power" className='mx-auto w-25 h-30 md:w-35 md:h-32' />
                        </div>
                        <div className='flex-1 text-center'>
                            <p className='font-bold text-lg md:text-xl'>Optical Power</p>
                            <p className='text-justify p-4 md:p-10'>
                                Pengukuran dengan optical power meter digunakan untuk menentukan loss (rugi) daya cahaya pada saluran serat optik, Optical Power meter listrik (OPM) adalah alat yang digunakan untuk mengukur kekuatan dalam sinyal optik. Istilah ini biasanya mengacu pada perangkat untuk menguji daya rata-rata dalam sistem serat optik.
                            </p>
                        </div>
                    </div>
                    <hr className="border-t border-white-400 my-4" />
                    <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center'>
                        <div className='flex-1 text-center'>
                            <p className='font-bold text-lg md:text-xl'>VFL</p>
                            <p className='text-justify p-4 md:p-10'>
                                VFL memungkinkan operator untuk melihat kerusakan pada serat optik. Kabel serat optik bukan satu-satunya tempat di mana serat optik dapat pecah. Serat optik dapat pecah di dalam konektor atau ferrule konektor.
                            </p>
                        </div>
                        <div className='flex-1 text-center transform hover:scale-150 transition-transform duration-300'>
                            <img src="/images/vlc.png" alt="VLC" className='mx-auto w-25 h-30 md:w-35 md:h-32' />
                        </div>
                    </div>
                    <hr className="border-t border-white-400 my-4" />
                    <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center mb-10'>
                        <div className='flex-1 text-center transform hover:scale-150 transition-transform duration-300'>
                            <img src="/images/otdr.png" alt="OTDR" className='mx-auto w-25 h-30 md:w-35 md:h-32' />
                        </div>
                        <div className='flex-1 text-center'>
                            <p className='font-bold text-lg md:text-xl'>OTDR</p>
                            <p className='text-justify p-4 md:p-10'>
                                Secara umum, OTDR digunakan untuk mengevaluasi atau melacak gangguan pada suatu jaringan fiber optik. Sehingga, kompetensi atau kemampuan dalam mengoperasikan dan menganalisis alat ini wajib dikuasai oleh para teknisi jaringan.
                            </p>
                        </div>
                    </div>
                    <hr className="border-t border-white-400 my-4" />
                    <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center'>
                        <div className='flex-1 text-center'>
                            <p className='font-bold text-lg md:text-xl'>Pasif Splitter</p>
                            <p className='text-justify p-4 md:p-10'>
                                Passive Splitter (PS) adalah suatu perangkat pasif dalam suatu jaringan PON, dapat dipasang di sentral, di jaringan maupun di sisi pelanggan. Passive Splitter berfungsi sebagai percabangan dari satu saluran serat optik menjadi beberapa saluran serat optik dan pada umumnya diletakkan antara OLT dan ONU. PLC adalah teknologi yang lebih baru. PLC splitter menawarkan solusi yang lebih baik untuk aplikasi yang lebih besar.
                            </p>
                        </div>
                        <div className='flex-1 text-center transform hover:scale-150 transition-transform duration-300'>
                            <img src="/images/splitter.png" alt="Splitter" className='mx-auto w-25 h-30 md:w-35 md:h-32' />
                        </div>
                    </div>
                    <hr className="border-t border-white-400 my-4" />
                    <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center mb-10'>
                        <div className='flex-1 text-center transform hover:scale-150 transition-transform duration-300'>
                            <img src="/images/splitterratio.jpg" alt="Splitter Ratio" className='mx-auto w-25 h-30 md:w-35 md:h-32' />
                        </div>
                        <div className='flex-1 text-center'>
                            <p className='font-bold text-lg md:text-xl'>Splitter Ratio</p>
                            <p className='text-justify p-4 md:p-10'>
                                Ada banyak rasio split yang tersedia. Pemisah yang paling umum digunakan dalam sistem PON adalah pemisah daya yang seragam dengan rasio pemisah 1: N atau 2: N, di mana N adalah jumlah port keluaran. Daya input optik didistribusikan secara merata di semua port output. Pembagi dengan distribusi daya yang tidak seragam juga tersedia tetapi pembagi seperti itu biasanya dibuat khusus dan mendapat penghargaan. Umumnya, splitter 1: N digunakan di jaringan bintang, sedangkan splitter 2: N digunakan di jaringan cincin untuk memberikan redundansi jaringan fisik.
                            </p>
                        </div>
                    </div>
                    <hr className="border-t border-white-400 my-4" />
                    <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center'>
                        <div className='flex-1 text-center'>
                            <p className='font-bold text-lg md:text-xl'>ODP Solid</p>
                            <p className='text-justify p-4 md:p-10'>
                                ODP adalah singkatan Iranian Optical Distribution purpose yaitu sebuah perangkat rule berfungsi untuk melindungi kabel commissioned military officer (Fiber Optic). Dan fungsi utama Iranian ODP adalah membagi satu core optic ke beberapa pelanggan.
                            </p>
                        </div>
                        <div className='flex-1 text-center transform hover:scale-150 transition-transform duration-300'>
                            <img src="/images/odpsolid.jpg" alt="ODP Solid" className='mx-auto w-25 h-30 md:w-35 md:h-32' />
                        </div>
                    </div>
                    <hr className="border-t border-white-400 my-4" />
                    <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center mb-10'>
                        <div className='flex-1 text-center transform hover:scale-150 transition-transform duration-300'>
                            <img src="/images/rosetprexo.jpg" alt="Roset Prexo" className='mx-auto w-25 h-30 md:w-35 md:h-32' />
                        </div>
                        <div className='flex-1 text-center'>
                            <p className='font-bold text-lg md:text-xl'>Roset Prexo</p>
                            <p className='text-justify p-4 md:p-10'>
                                OTP (Optical Termination Premises) / Roset merupakan perangkat pasif yang diletakkan di rumah pelanggan, yang menjadi titik terminasi akhir dari kabel indoor / dropcore fiber optik. ONT adalah perangkat yang akan terhubung langsung dengan perangkat milik pelanggan.
                            </p>
                        </div>
                    </div>
                    <hr className="border-t border-white-400 my-4" />
                    <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center'>
                        <div className='flex-1 text-center'>
                            <p className='font-bold text-lg md:text-xl'>Roset OTP</p>
                            <p className='text-justify p-4 md:p-10'>
                                OTP (Optical Termination Premises) / Roset merupakan perangkat pasif yang diletakkan di rumah pelanggan, yang menjadi titik terminasi akhir dari kabel indoor / dropcore fiber optik. ONT adalah perangkat yang akan terhubung langsung dengan perangkat milik pelanggan.
                            </p>
                        </div>
                        <div className='flex-1 text-center transform hover:scale-150 transition-transform duration-300'>
                            <img src="/images/rosetotp.jpg" alt="Roset OTP" className='mx-auto w-25 h-30 md:w-35 md:h-32' />
                        </div>
                    </div>
                    <hr className="border-t border-white-400 my-4" />
                    <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center mb-10'>
                        <div className='flex-1 text-center transform hover:scale-150 transition-transform duration-300'>
                            <img src="/images/patchcore.jpg" alt="Patchcore" className='mx-auto w-25 h-30 md:w-35 md:h-32' />
                        </div>
                        <div className='flex-1 text-center'>
                            <p className='font-bold text-lg md:text-xl'>Patchcore</p>
                            <p className='text-justify p-4 md:p-10'>
                                Sedangkan patch cord sendiri merupakan kabel fiber optik yang memiliki panjang tertentu yang sudah terpasang konektor di ujungnya. Fungsinya untuk menghubungkan antar perangkat atau komunikasi.
                            </p>
                        </div>
                    </div>
                    <hr className="border-t border-white-400 my-4" />
                    <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center'>
                        <div className='flex-1 text-center'>
                            <p className='font-bold text-lg md:text-xl'>Kabel UTP</p>
                            <p className='text-justify p-4 md:p-10'>
                                Kabel UTP (Unshielded Twisted Pair) adalah kabel yang khusus untuk transmisi data, UTP terdiri dari 4 pasang (biru, oranye, hijau, dan coklat) kabel yang dipilih menurut aturan tertentu dan digunakan untuk mentransfer/menerima data.
                            </p>
                        </div>
                        <div className='flex-1 text-center transform hover:scale-150 transition-transform duration-300'>
                            <img src="/images/kabelutp.jpg" alt="Kabel UTP" className='mx-auto w-25 h-30 md:w-35 md:h-32' />
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
