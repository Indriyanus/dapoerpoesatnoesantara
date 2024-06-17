import { Carousel } from '@mantine/carousel';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { RiArrowLeftWideLine } from "react-icons/ri";
import { RiArrowRightWideLine } from "react-icons/ri";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";

const TeamsCarousel = () => {
  const emblaRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (emblaRef.current) {
        emblaRef.current.scrollNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel
      getEmblaApi={embla => (emblaRef.current = embla)}
      withIndicators
      loop
    >
      <Carousel.Slide>
      <section className='flex py-5 px-5 items-center'>
      <div className='flex-1 flex-col flex justify-center items-center py-20 px-20'>
                    <img
                    src="/images/direktur.png"
                    alt="User Avatar"
                    className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
                    />
                    <p className='text-md font-bold py-5'>
                    Indriyanus
                    </p>
                </div>
                <div className='flex-1 py-20 pl-20 px-20 text-left'>
                    <p className='text-2xl font-bold'>Direktur Utama</p>
                    <p className='py-10 text-base text-justify'>
                    Kepada seluruh karyawan PT. Dapoer Poesat Noesantara Group, mari kita terus melangkah maju dengan semangat yang tak kenal lelah. Dedikasi dan kerja keras kalian adalah kunci kesuksesan perusahaan ini.
                    </p>
                    <p className='text-base text-justify'>
                    Jakarta, 12 Juli 2014
                    </p>
                </div>
            </section>
      </Carousel.Slide>
      <Carousel.Slide>
        <section className='flex items-center justify-center'>
                <div className='flex-1 flex-col flex justify-center items-center py-20 px-20'>
                    <img
                    src="/images/lina.png"
                    alt="User Avatar"
                    className="w-40 h-40 rounded-full border-2 border-white shadow-lg object-cover"
                    />
                    <p className='text-md font-bold py-5'>
                    Lina Maharani
                    </p>
                </div>
                <div className='flex-1 py-20 pl-20 px-20 text-left'>
                    <p className='text-2xl font-bold'>Komisaris</p>
                    <p className='py-10 text-base text-justify'>
                    Dalam setiap la
                    ngkah yang kita ambil, mari kita tanamkan semangat untuk menjadi yang terbaik. Bersama, kita bisa menghadapi setiap tantangan dan meraih setiap kesuksesan.
                    </p>
                    <p className='text-base text-justify'>
                    Bandung, 24 April 2014
                    </p>
                </div>
            </section>
      </Carousel.Slide>
      <Carousel.Slide>
        <section className='flex items-center justify-center'>
                <div className='flex-1 flex-col flex justify-center items-center py-20 px-20'>
                    <img
                    src="/images/ridwan.png"
                    alt="User Avatar"
                    className="w-40 h-40 rounded-full border-2 border-white shadow-lg object-cover"
                    />
                    <p className='text-md font-bold py-5'>
                    Ridwan Nur Fadil
                    </p>
                </div>
                <div className='flex-1 py-20 pl-20 px-20 text-left'>
                    <p className='text-2xl font-bold'>Direktur</p>
                    <p className='py-10 text-base text-justify'>
                    Keberhasilan perusahaan ini adalah cermin dari kerja keras dan semangat juang kalian, para karyawan. Teruslah bersemangat, berinovasi, dan berkolaborasi untuk mewujudkan visi besar perusahaan.
                    </p>
                    <p className='text-base text-justify'>
                    Jakarta, 30 Januari 2014
                    </p>
                </div>
            </section>
      </Carousel.Slide>
      <Carousel.Slide>
        <section className='flex items-center justify-center'>
                <div className='flex-1 flex-col flex justify-center items-center py-20 px-20'>
                    <img
                    src="/images/irfan.png"
                    alt="User Avatar"
                    className="w-40 h-40 rounded-full border-2 border-white shadow-lg object-cover"
                    />
                    <p className='text-md font-bold py-5'>
                    Irfan Abidin Kuncoro
                    </p>
                </div>
                <div className='flex-1 py-20 pl-20 px-20 text-left'>
                    <p className='text-2xl font-bold'>Business & Strategy Manager</p>
                    <p className='py-10 text-base text-justify'>
                    Kalian adalah aset berharga bagi PT. Dapoer Poesat Noesantara Group. Mari kita terus membangun momentum positif, memberikan yang terbaik, dan menorehkan prestasi yang gemilang.
                    </p>
                    <p className='text-base text-justify'>
                    Jakarta, 24 Juli 2014
                    </p>
                </div>
            </section>
      </Carousel.Slide>
      <Carousel.Slide>
        <section className='flex items-center justify-center'>
                <div className='flex-1 flex-col flex justify-center items-center py-20 px-20'>
                    <img
                    src="/images/ivan.png"
                    alt="User Avatar"
                    className="w-40 h-40 rounded-full border-2 border-white shadow-lg object-cover"
                    />
                    <p className='text-md font-bold py-5'>
                    M. Ivan Ryandi
                    </p>
                </div>
                <div className='flex-1 py-20 pl-20 px-20 text-left'>
                    <p className='text-2xl font-bold'>Finance Manager</p>
                    <p className='py-10 text-base text-justify'>
                    Setiap langkah kecil menuju kesuksesan adalah hasil dari kerja keras dan semangat pantang menyerah kalian. Tetaplah bersemangat, fokus pada tujuan, dan jadikan setiap hari sebagai kesempatan baru untuk berkarya.
                    </p>
                    <p className='text-base text-justify'>
                    Jakarta, 16 Februari 2015
                    </p>
                </div>
            </section>
      </Carousel.Slide><Carousel.Slide>
        <section className='flex items-center justify-center'>
                <div className='flex-1 flex-col flex justify-center items-center py-20 px-20'>
                    <img
                    src="/images/hr.png"
                    alt="User Avatar"
                    className="w-40 h-40 rounded-full border-2 border-white shadow-lg object-cover"
                    />
                    <p className='text-md font-bold py-5'>
                    Safira Harun
                    </p>
                </div>
                <div className='flex-1 py-20 pl-20 px-20 text-left'>
                    <p className='text-2xl font-bold'>HR Manager</p>
                    <p className='py-10 text-base text-justify'>
                    Dalam setiap tindakan dan keputusan, biarkan semangat kita mengilhami orang-orang di sekitar kita. Bersama, kita bisa mencapai lebih dari yang kita bayangkan. Mari lanjutkan perjalanan ini dengan semangat yang menyala-nyala.
                    </p>
                    <p className='text-base text-justify'>
                    Jakarta, 06 Mei 2016
                    </p>
                </div>
            </section>
      </Carousel.Slide>
      <Carousel.Slide>
        <section className='flex items-center justify-center'>
                <div className='flex-1 flex-col flex justify-center items-center py-20 px-20'>
                    <img
                    src="/images/4.png"
                    alt="User Avatar"
                    className="w-40 h-40 rounded-full border-2 border-white shadow-lg object-cover"
                    />
                    <p className='text-md font-bold py-5'>
                    Eko Lestanto
                    </p>
                </div>
                <div className='flex-1 py-20 pl-20 px-20 text-left'>
                    <p className='text-2xl font-bold'>Operations Manager</p>
                    <p className='py-10 text-base text-justify'>
                    Kepada seluruh tim PT. Dapoer Poesat Noesantara Group, semangat kalian adalah pendorong utama di balik kesuksesan perusahaan ini. Mari kita pertahankan semangat ini, terus bergerak maju, dan mengukir sejarah bersama.
                    </p>
                    <p className='text-base text-justify'>
                    Jakarta, 07 Juni 2015
                    </p>
                </div>
            </section>
      </Carousel.Slide>
      <Carousel.Slide>
        <section className='flex items-center justify-center'>
                <div className='flex-1 flex-col flex justify-center items-center py-20 px-20'>
                    <img
                    src="/images/nurviki.png"
                    alt="User Avatar"
                    className="w-40 h-40 rounded-full border-2 border-white shadow-lg object-cover"
                    />
                    <p className='text-md font-bold py-5'>
                    Nurviki Setiawan
                    </p>
                </div>
                <div className='flex-1 py-20 pl-20 px-20 text-left'>
                    <p className='text-2xl font-bold'>IT Manager</p>
                    <p className='py-10 text-base text-justify'>
                    Setiap tantangan yang kita hadapi adalah peluang untuk membuktikan kemampuan dan ketangguhan kita. Mari kita hadapi dengan semangat yang membara dan keyakinan yang kuat. Bersama, kita tak akan terhenti sampai mencapai puncak kesuksesan.
                    </p>
                    <p className='text-base text-justify'>
                    Jakarta, 06 April 2014
                    </p>
                </div>
            </section>
      </Carousel.Slide>

    </Carousel>
  );
};

export default TeamsCarousel;
