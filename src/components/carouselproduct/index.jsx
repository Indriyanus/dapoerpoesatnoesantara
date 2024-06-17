import { Carousel } from '@mantine/carousel';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { RiArrowLeftWideLine } from "react-icons/ri";
import { RiArrowRightWideLine } from "react-icons/ri";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";

const ProductCarousel = () => {
  const emblaRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (emblaRef.current) {
        emblaRef.current.scrollPrev();
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
        <section className='flex py-10 px-5 items-center'>
          <div className='flex-1 py-10 px-5 flex justify-center items-center'>
            <img src="/images/splitter.png" alt="" className='w-1/2 h-1/8' />
          </div>
          <div className='flex-1 py-20 pl-20 px-20 text-left'>
            <p className='text-2xl font-bold'>Pasif Splitter</p>
            <p className='py-10 text-base text-justify'>
              Passsive Splitter (PS) adalah suatu perangkat pasif dalam suatu jaringan PON, dapat dipasang di sentral, di jaringan maupun di sisi pelanggan. Passive Splitter berfungsi sebagai percabangan dari satu saluran serat optik menjadi beberapa saluran serat optik dan pada umumnya diletakkan antara OLT dan ONU. PLC adalah teknologi yang lebih baru. PLC splitter menawarkan solusi yang lebih baik untuk aplikasi yang lebih besar.
            </p>
          </div>
        </section>
      </Carousel.Slide>
      <Carousel.Slide>
        <section className='flex py-10 px-5 items-center'>
          <div className='flex-1 py-10 px-5 flex justify-center items-center'>
            <img src="/images/splitterratio.jpg" alt="" className='w-1/2 h-1/8' />
          </div>
          <div className='flex-1 py-20 pl-20 px-20 text-left'>
            <p className='text-2xl font-bold'>Splitter Ratio</p>
            <p className='py-10 text-base text-justify'>
              Ada banyak rasio split yang tersedia. Pemisah yang paling umum digunakan dalam sistem PON adalah pemisah daya yang seragam dengan rasio pemisah 1: N atau 2: N, di mana N adalah jumlah port keluaran. Daya input optik didistribusikan secara merata di semua port output. Pembagi dengan distribusi daya yang tidak seragam juga tersedia tetapi pembagi seperti itu biasanya dibuat khusus dan mendapat penghargaan. Umumnya, splitter 1: N digunakan di jaringan bintang, sedangkan splitter 2: N digunakan di jaringan cincin untuk memberikan redundansi jaringan fisik.
            </p>
          </div>
        </section>
      </Carousel.Slide>
      <Carousel.Slide>
        <section className='flex py-10 px-5 items-center'>
          <div className='flex-1 py-10 px-5 flex justify-center items-center'>
            <img src="/images/otdr.png" alt="" className='w-1/4 h-1/8' />
          </div>
          <div className='flex-1 py-20 pl-20 px-20 text-left'>
            <p className='text-2xl font-bold'>OTDR</p>
            <p className='py-10 text-base text-justify'>
              Secara umum, OTDR digunakan untuk mengevaluasi atau melacak gangguan pada suatu jaringan fiber optik. Sehingga, kompetensi atau kemampuan dalam mengoperasikan dan menganalisis alat ini wajib dikuasai oleh para teknisi jaringan.
            </p>
          </div>
        </section>
      </Carousel.Slide>
    </Carousel>
  );
};

export default ProductCarousel;
