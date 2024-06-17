import { Carousel } from '@mantine/carousel';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";

const ProductCarousel = () => {
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
      nextControlIcon={<RiArrowRightWideLine />}
      previousControlIcon={<RiArrowLeftWideLine />}
    >
      <Carousel.Slide>
        <section className='flex py-10 px-5 items-center'>
          <div className='flex-1 py-10 px-5 flex justify-center items-center'>
            <Image src="/images/splitter.webp" alt="Pasif Splitter" width={300} height={200} className='w-1/2 h-auto' />
          </div>
          <div className='flex-1 py-20 pl-20 px-20 text-left'>
            <p className='text-2xl font-bold'>Pasif Splitter</p>
            <p className='py-10 text-base text-justify'>
              Pasif Splitter (PS) adalah perangkat pasif dalam jaringan PON yang berfungsi sebagai percabangan dari satu saluran serat optik menjadi beberapa saluran serat optik, dan pada umumnya diletakkan antara OLT dan ONU.
            </p>
          </div>
        </section>
      </Carousel.Slide>
      <Carousel.Slide>
        <section className='flex py-10 px-5 items-center'>
          <div className='flex-1 py-10 px-5 flex justify-center items-center'>
            <Image src="/images/splitterratio.webp" alt="Splitter Ratio" width={300} height={200} className='w-1/2 h-auto' />
          </div>
          <div className='flex-1 py-20 pl-20 px-20 text-left'>
            <p className='text-2xl font-bold'>Splitter Ratio</p>
            <p className='py-10 text-base text-justify'>
              Ada banyak rasio split yang tersedia. Splitter yang paling umum digunakan dalam sistem PON adalah splitter daya yang seragam dengan rasio splitter 1: N atau 2: N, di mana N adalah jumlah port keluaran.
            </p>
          </div>
        </section>
      </Carousel.Slide>
      <Carousel.Slide>
        <section className='flex py-10 px-5 items-center'>
          <div className='flex-1 py-10 px-5 flex justify-center items-center'>
            <Image src="/images/otdr.webp" alt="OTDR" width={300} height={200} className='w-1/4 h-auto' />
          </div>
          <div className='flex-1 py-20 pl-20 px-20 text-left'>
            <p className='text-2xl font-bold'>OTDR</p>
            <p className='py-10 text-base text-justify'>
              OTDR digunakan untuk mengevaluasi atau melacak gangguan pada jaringan fiber optik. Kompetensi dalam mengoperasikan dan menganalisis alat ini wajib dikuasai oleh teknisi jaringan.
            </p>
          </div>
        </section>
      </Carousel.Slide>
    </Carousel>
  );
};

export default ProductCarousel;
